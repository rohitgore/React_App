import React from 'react';
import './formstyle.scss';
 
const error=()=>
{
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}
const InputForm = (props:any) => {
    return (
        <div>
            <div className="container py-2">
              <div>{props.error ? error() : null}</div>
               <form className="inputform" onSubmit={props.loadweather}>
               <div className="row">
                    <div className="offset-md-4 col-md-2">
                        <input type="text" name="city" placeholder="City name" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-2">
                        <input type="text" name="country" placeholder="Country name" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-danger">Get Weather</button>
                    </div>
                </div>
               </form>
            </div>
        </div>
    )
}
export default InputForm;