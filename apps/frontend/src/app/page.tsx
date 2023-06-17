import { Button } from '@/components/commons/Button/Button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1 className='text-lg'>Home page</h1>
      </div>
      <div>
        <Button size='sm' />
      </div>
    </main>
  );
}
