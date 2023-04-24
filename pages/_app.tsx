import "@/styles/globals.css";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
