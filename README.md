# Taha Render Forum Community Forum

Welcome to the Taha Render Forum Community Forum! This is a Reddit-inspired clone with some amazing features and improvements. We've incorporated a modern flair, added a voting functionality, and even included an MDX blog. Here's how you can set it up:

## Prerequisites

Make sure you have the following environment variables set up before running the application:

```bash
NEXTAUTH_SECRET=

(Google Console)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

(UploadThing)
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

(Upstash)
REDIS_URL=
REDIS_SECRET=

(Cockroach DB)
DATABASE_URL=
```

## How to Obtain Environment Variables

### NextAuth Secret

Visit NextAuth documentation to learn how to set up NextAuth with Google. You will need to create a project on the Google Cloud Console and obtain the required credentials.

### Google Client Id and Google Client Secret

Create a project on the Google Cloud Console and enable the Google+ API. Create OAuth credentials to get the Client Id and Client Secret.

### UploadThing Secret and UploadThing App Id

Visit UploadThing and sign up to get the required credentials.

### Redis Url and Redis Secret

Sign up on Upstash to get a Redis instance URL and secret.

### Database Url (Cockroach DB)

Set up a Cockroach DB instance and obtain the database URL.

## Running the Application

- Clone this repository to your local machine.
- Install dependencies by running npm install.
- Set up the environment variables in a .env.local file at the root of the project.
- Run the application using npm run dev.

Now you're all set! Visit the application at http://localhost:3000 and start exploring the Taha Render Forum Community Forum.

Feel free to contribute, report issues, or suggest improvements. Happy coding!
