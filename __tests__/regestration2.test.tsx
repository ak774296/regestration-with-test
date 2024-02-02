import '@testing-library/jest-dom'
import { fireEvent, render,screen } from '@testing-library/react'
import Regestration_step2 from'../src/app/regestration2/page'

jest.mock("next/navigation", () => {
    const actual = jest.requireActual("next/navigation");
    return {
      ...actual,
      useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn(),
      })),
      useSearchParams: jest.fn(() => ({
        get: jest.fn(),
      })),
      usePathname: jest.fn(),
    };
  });

describe("Test cases for regestration 2",()=>{

    it("Checking the component rendering",()=>{

        render(<Regestration_step2/>);
        expect(screen.getByText('Regestration Step 2')).toBeInTheDocument();
        
    })

    it("Checking of nnChange for password",()=>{

        render(<Regestration_step2/>);
        let input=screen.getByTitle('password') as HTMLInputElement;
        fireEvent.change(input,{target:{value:"1231231"}}); 
        expect(input.value).toBe("1231231");

    })

    it("Checking of onChange for confirm password",()=>{

        render(<Regestration_step2/>);
        let input=screen.getByTitle('cpassword') as HTMLInputElement;
        fireEvent.change(input,{target:{value:"1231231"}}); 
        expect(input.value).toBe("1231231");

    })

    it("Checking of submition of button",()=>{
        render(<Regestration_step2/>);
        let btn1=screen.getByTitle('next');
        let btn2=screen.getByTitle('prv');

        fireEvent.change(screen.getByTitle('password'),{target:{value:"1231231"}}); 
        fireEvent.change(screen.getByTitle('cpassword'),{target:{value:"1231231"}}); 

        fireEvent.click(btn1);
        fireEvent.click(btn2);
    })
})