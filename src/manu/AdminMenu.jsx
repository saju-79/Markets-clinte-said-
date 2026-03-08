import { FaUserCog } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from '../Shareeded/MenuItem'

const AdminMenu = () => {
    return (
        <>
            {/* <MenuItem icon={BsGraphUp} label='Statistics' address='/dashboard/statistics' /> */}
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
        </>
    )
}

export default AdminMenu