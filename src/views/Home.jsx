import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select'
function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    
    const options = [
        { value: '1', label: 'male' },
        { value: '2', label: 'famale' },
     
      ]
      const subjects = [
        { value: '1', label: 'node js' },
        { value: '2', label: 'javascript' },
        { value: '3', label: 'php' },
        { value: '4', label: 'laravel' },

     
      ]
      
    return (
        <div>
            <h1 className="text-center m-5">Regestration  Form</h1>
            <Form className=" w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"
                        {...register("firstname", { required: true })} />
                </Form.Group>
                {errors.firstname && <p className="text-danger">first name is required</p>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last Name"
                        {...register("lastname", { required: true })} />
                </Form.Group>
                {errors.lastname && <p className="text-danger">Last name is required</p>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        {...register("email", {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                </Form.Group>
                {errors.email && <p className="text-danger ">Please check the email</p>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })} />
                    {errors.password && <p className="text-danger">Please check the Password</p>}
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Select options={options} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Select options={subjects} isMulti defaultValue={[subjects[0],subjects[1]]}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );

}
export default Home;