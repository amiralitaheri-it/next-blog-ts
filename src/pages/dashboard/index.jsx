import React from 'react';

import DashboardLayout from "@/components/layouts/dashboard-layout";

function Index() {
    return (
        <div className="text-white mt-10">Welcome to Dashboard</div>
    );
}

export default Index;

Index.getLayout = (page) => {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}