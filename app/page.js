// app/page.js
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard'); // This will redirect the user to the sign-in page
  return null;
}
