// it is a better way to acces .env variables file 

const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),

    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),

    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    appwritebucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default config