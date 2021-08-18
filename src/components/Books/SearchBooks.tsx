import React from 'react'
import {Field, Form, Formik} from 'formik'
import { useSelector, useDispatch } from "react-redux";
import {setTotalUsersCount } from "../../redux/selectors/books-selector";
import { SearchType } from '../../types/books-type'
import './../../App.css'
import { FilterType } from '../../redux/reducers/books-reducer';

const usersSearchFormValidate = (values: any) => {

    const errors = {}
    return errors
}



function SearchBooks({onFilterChanged}) {
    const totalItemsCount = useSelector(setTotalUsersCount)

    const submit = (values: SearchType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log(values)
        const filter: FilterType = {
            term: values.term,
            categories: values.categiries,
            sort: values.sort
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='search' >
        <Formik
            enableReinitialize
            initialValues={{term: '',  categiries: '', sort: ''} as SearchType}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                   <div >
                   <div className="input-group mb-3">
                   <Field placeholder='Search...' type="text" name="term" className="form-control"/>
                   <button disabled={isSubmitting}  className="btn btn-outline-secondary" type="submit" id="button-addon2">Find</button>
                   </div>
                   <div style={{flexDirection: 'column', paddingTop: '50px'}}>
                   <div style={{display: 'flex',flexDirection: 'row', marginBottom: '30px'}}>
                  <div  style={{paddingRight: '60px'}}>
                  <Field  className="form-select form-select-lg mb-3"  name="categiries" as="select" >
                        <option value="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </Field>
                  </div>
                   
                  <div>
                  <Field   className="form-select form-select-lg mb-3" name="sort" as="select">
                        <option value="relevance ">Relevance </option>
                        <option value="newest">Newest</option>
                       
                    </Field>
                  </div>
                   </div>
                  
                   
                   </div>
                   </div>
                </Form>
            )}
        </Formik>
        
    </div>
}

export default SearchBooks
