import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import { env } from './env';

interface UploadResult {
  filename: string;
  url: string;
}

/**
 * Upload a file buffer to either local storage or S3 based on configuration.
 * @param buffer - The file buffer to upload
 * @param extension - File extension (e.g., 'jpeg', 'png')
 * @returns Object containing filename and full URL to access the file
 */
export async function uploadFile(
  buffer: Buffer,
  extension: string = 'jpeg',
): Promise<UploadResult> {
  const filename = `${crypto.randomUUID()}.${extension}`;

  if (env.STORAGE_TYPE === 's3') {
    return uploadToS3(buffer, filename);
  } else {
    return uploadToLocal(buffer, filename);
  }
}

/**
 * Upload file to local public directory
 */
async function uploadToLocal(buffer: Buffer, filename: string): Promise<UploadResult> {
  try {
    const screenshotsDir = path.resolve(process.cwd(), env.PUBLIC_SCREENSHOTS_PATH);

    // Ensure directory exists
    await fs.mkdir(screenshotsDir, { recursive: true });

    const diskPath = path.join(screenshotsDir, filename);
    await fs.writeFile(diskPath, buffer);

    // Generate URL based on BASE_URL if provided, otherwise return relative path
    const url = env.BASE_URL
      ? `${env.BASE_URL}/screenshots/${filename}`
      : `/screenshots/${filename}`;

    return { filename, url };
  } catch (error) {
    throw new Error(
      `Failed to upload file to local storage: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}

/**
 * Upload file to S3 bucket
 */
async function uploadToS3(buffer: Buffer, filename: string): Promise<UploadResult> {
  // Validate S3 configuration
  if (!env.S3_BUCKET || !env.S3_REGION || !env.S3_ACCESS_KEY_ID || !env.S3_SECRET_ACCESS_KEY) {
    throw new Error(
      'S3 configuration incomplete. Required: S3_BUCKET, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY',
    );
  }

  try {
    const client = new S3Client({
      region: env.S3_REGION,
      credentials: {
        accessKeyId: env.S3_ACCESS_KEY_ID,
        secretAccessKey: env.S3_SECRET_ACCESS_KEY,
      },
    });

    const key = `screenshots/${filename}`;

    const command = new PutObjectCommand({
      Bucket: env.S3_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: `image/${filename.split('.').pop()}`,
      // Make files publicly readable
      ACL: 'public-read',
    });

    await client.send(command);

    // Generate URL based on S3_BASE_URL if provided, otherwise construct from bucket/region
    const url = env.S3_BASE_URL
      ? `${env.S3_BASE_URL}/${key}`
      : `https://${env.S3_BUCKET}.s3.${env.S3_REGION}.amazonaws.com/${key}`;

    return { filename, url };
  } catch (error) {
    throw new Error(
      `Failed to upload file to S3: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}
