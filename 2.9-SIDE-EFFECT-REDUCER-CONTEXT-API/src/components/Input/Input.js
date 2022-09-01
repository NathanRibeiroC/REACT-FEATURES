import React, { useEffect, useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    // useEffect(()=>{
    //     //.focus() original from input DOm, focus input after page is rendered
    //     //on this exaple will focus the second input because it is rendered last
    //     inputRef.current.focus();
    // },[]);

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref,()=>{
        return{
            //focus could have been anyname, this is only a translation object, to communicate with outside world
            focus: activate
        };
    });

    return (
        <React.Fragment>
        <div
          className={`${classes.control} ${
            props.inputState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.htmlFor}>E-Mail</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.inputState.value}
            onChange={props.inputChangeHandler}
            onBlur={props.validateInputHandler}
          />
        </div>
        </React.Fragment>
    );
});

export default Input;
