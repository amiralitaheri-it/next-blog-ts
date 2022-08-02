import React from 'react';
import {NextPage} from "next";

import DashboardLayout from "@/components/layouts/dashboard-layout";

const Index: NextPage = () => {
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