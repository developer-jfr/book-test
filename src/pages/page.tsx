import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { withSuspense } from '../hoc/withSuspense'
import Books from  './../components/Books/Books'

const SpecificBook = React.lazy(() => import('../components/Books/SpecificBook'))


const SuspenseSpecificBook = withSuspense(SpecificBook)

function MainPage() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Books} />
                <Route path='/:id' exact component={SuspenseSpecificBook} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainPage
