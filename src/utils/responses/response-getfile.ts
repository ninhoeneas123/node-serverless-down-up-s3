import { Buffer } from 'buffer'; // Certifique-se de ter o pacote 'buffer' instalado

export function responseModelDownloadfile(response: Buffer, statusCode: number) {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Disposition': 'inline',
      'Content-Type': 'image/jpeg',
    },
    body: response.toString('base64'),
    isBase64Encoded: true,
  }
}