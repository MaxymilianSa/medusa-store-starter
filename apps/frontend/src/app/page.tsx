import { Button } from '@/components/commons/Button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1 className='text-lg'>Home page</h1>
      </div>
      <div>
        <Button label='Button' variant='primary' size='md' isAccentuated />
      </div>
    </main>
  );
}
