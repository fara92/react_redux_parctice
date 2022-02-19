import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import {WithErrorApi} from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList/peopleList";
import {getApiResources} from "@utils/network";
import {API_PEOPLE} from "@constants/api";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState([])
    const query = useQueryParams()
    console.log(query)

    const getResource = async (url) => {
        const res = await getApiResources(url)

        console.log(res)

        if(res){
            const peopleList = res.results.map(({name, url})=>{
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return{
                    name,
                    img,
                    id
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
            console.log('sett error FALSE')
        }else {
            console.log('sett error true')
            setErrorApi(true)
        }

    }

    useEffect(()=>{
        getResource(API_PEOPLE)
    },[])

    return (
        <div>
            <PeopleList people={people}/>
        </div>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

//export default WithErrorApi(PeoplePage);
export default PeoplePage;