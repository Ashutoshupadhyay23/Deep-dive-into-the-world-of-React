// it is a better way to acces .env variables file to store them all at one place and then access them anywhere from here.

const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),

    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default config