import React from "react";

export default interface Navigation {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    current?: boolean;
}
