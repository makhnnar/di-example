import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './NavBar.css';

export class TabInfo {

    label:string
    icon:string
    route:string

    constructor(
        label:string,
        icon:string,
        route:string
    ){
        this.label = label
        this.icon = icon
        this.route = route
    }

}

interface TabButtonProps {
    tabInfo: TabInfo,
    pos: number,
    activeTab:number,
    onTabClick:(pos:number,route:string)=>void
}

export const TabButton = ({ tabInfo, pos, activeTab, onTabClick }:TabButtonProps) => {
  
    return (
        <div 
            key={pos}
            className={"tab "+(pos === activeTab ? 'active' : 'inactive')}
            onClick={() => onTabClick(pos,tabInfo.route)}>
            {tabInfo.label}
        </div>
    );

}

interface NavBarProps {
    tabs: TabInfo[],
}

export const NavBar = ({tabs}:NavBarProps) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const navigate = useNavigate()
    return <div className="tab-container">
    {tabs.map((tab, index) => (
        <TabButton
            tabInfo={tab}
            pos={index}
            activeTab={activeTab}
            onTabClick={
                (pos,route) => {
                    setActiveTab(pos)
                    navigate(route)
                }
            }
        />
    ))}
  </div>
}