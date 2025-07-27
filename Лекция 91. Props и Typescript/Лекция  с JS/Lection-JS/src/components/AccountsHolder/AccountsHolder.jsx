import { useState } from 'react'

const AccountsHolder = ({render})=>{
    // console.log('start')

    const [accounts, setAccount] = useState([
        {id:1, name:'Card **** * 464', balance:10000},
        {id:2, name:'Card **** * 623', balance:25000},
    ]);

    return (
        <> {render(accounts)}</>
    )





}
export default AccountsHolder