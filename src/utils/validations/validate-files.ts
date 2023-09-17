
export default function validateFiles(files: File): boolean {
    if (!files || !files.contentType) {
        return false;
    }
    const contentType = files.contentType;
    if (contentType !== 'image/jpeg') {
        return false;
    }
    return true;
}