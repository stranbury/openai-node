import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
// import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
// import prisma from "@lib/prisma";

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

export const authOptions: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SECRET_KEY,
  }),
  theme: {
    colorScheme: "light",
  }, 
  secret: process.env.SECRET,
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };