import React from 'react';
import Create from "../../components/users/actions/create";
import List from "../../components/users/list";
import Filter from "../../components/users/filter";

function Home() {
    return (
        <div className="relative overflow-x-auto sm:rounded-lg top-52 max-w-screen-2xl mx-auto grid place-items-center p-5">
            <div className="flex w-full justify-between">
                <Filter/>
                <Create/>
            </div>
            <List/>
        </div>
    );
}

export default React.memo(Home);