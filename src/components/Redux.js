import React from 'react';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './../state/actions/actions';

const Redux = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="text-center">Counter {counter}</h1>
            <div className="flex-center">
                <Button color="primary" onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <Button color="primary" onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </div>
        </div>
    );
};

export default Redux;