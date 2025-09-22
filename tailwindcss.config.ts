import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config={
    content:["./index.html", "./src/**/.*{js,ts,jsx,tsx}"],
    theme:{},
    plugins:[
       tailwindcssAnimate
    ]
}

export default config