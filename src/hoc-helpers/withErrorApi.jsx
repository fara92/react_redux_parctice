import React, {useState} from 'react';
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const WithErrorApi = View => {

    const [errorApi, setErrorApi] = useState(false)
    return props => {

        return (
            <div>
                {errorApi
                    ? <ErrorMessage/>
                    : (<View
                        setErrorApi={setErrorApi}
                        {...props}
                    />)
                }
            </div>
        )
    }
};
