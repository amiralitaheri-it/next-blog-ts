import React from 'react';

import DashboardLayout from "@/components/layouts/dashboard-layout";

function Profile() {
    return (
        <div className="text-white mt-10">This is your profile</div>
    );
}

export default Profile;

Profile.getLayout = (page) => {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}