'use client';

import { Button } from './commons/Button/Button';

const ButtonExample = () => (
  <div>
    <div className='py-2.5'>
      <h1>Large buttons</h1>
    </div>
    <Button iconName='arrow'>Button</Button>
    <Button variant='active' iconName='arrow'>
      Active
    </Button>
    <Button variant='disabled' iconName='arrow'>
      Disabled
    </Button>
    <div className='py-2.5'>
      <h1>Small buttons</h1>
    </div>
    <Button size='small'>Button</Button>
    <Button size='small' variant='secondary'>
      Secondary
    </Button>
    <Button size='small' variant='active'>
      Active
    </Button>
    <Button size='small' variant='disabled'>
      Disabled
    </Button>
    <Button size='small' variant='disabledSecondary'>
      disabled
    </Button>
  </div>
);

export default ButtonExample;
