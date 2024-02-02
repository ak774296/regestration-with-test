import '@testing-library/jest-dom'
import { fireEvent, render,screen } from '@testing-library/react'
import Regestration_step1 from'../src/app/regestration1/page'

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
describe("Testcases for checking of regestartion 2",()=>{
  
    it("Text rendering checking for comp Regestration1",()=>{

        render(<Regestration_step1/>);
        expect(screen.getByText('Regestration Step 1')).toBeInTheDocument();

    })

    it("Checking of Onchange for firstname",()=>{

        render(<Regestration_step1/>);
        let input=screen.getByTitle('firstName') as HTMLInputElement
        fireEvent.change(input,{target:{value:"Arvind"}}); 
        expect(input.value).toBe("Arvind");

    })

    it("Checking of Onchange for middlename",()=>{

        render(<Regestration_step1/>);
        let input=screen.getByTitle('middleName') as HTMLInputElement;
        fireEvent.change(input,{target:{value:"kumar"}}); 
        expect(input.value).toBe("kumar");

    })

    it("Checking of Onchange for lastname",()=>{

        render(<Regestration_step1/>);
        let input=screen.getByTitle('lastName') as HTMLInputElement;
        fireEvent.change(input,{target:{value:"chalka"}}); 
        expect(input.value).toBe("chalka");

    })

    it("Checking of Onchange for email",()=>{

        render(<Regestration_step1/>);
        let input=screen.getByTitle('email') as HTMLInputElement;
        fireEvent.change(input,{target:{value:"ak@12"}}); 
        expect(input.value).toBe("ak@12");

    })

    it("Show error When form is submiting without its input tag value",()=>{

      render(<Regestration_step1/>);
      let btn=screen.getByRole('button');

      fireEvent.change(screen.getByTitle('firstName') as HTMLInputElement
      ,{target:{value:"Arvind"}}); 
      fireEvent.change(screen.getByTitle('middleName') as HTMLInputElement
      ,{target:{value:"Kumar"}}); 
      fireEvent.change(screen.getByTitle('lastName') as HTMLInputElement
      ,{target:{value:"Chalka"}}); 
      fireEvent.change(screen.getByTitle('email') as HTMLInputElement
      ,{target:{value:"ak@12"}}); 


      fireEvent.submit(btn);

    })
})