import Button from "../components/Button";

function Especializacion({imageRoute, title, text}) {
    return (
        <>
            <div className="absolute flex flex-col gap-1 text-main-gold left-2 bottom-2 bg-gray-200 p-4 rounded-sm w-9/12">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm/4">{text}</p>
                {/* <Button type="text-only">
                    <div className="flex gap-1 items-center font-medium">
                        Ver más
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="#713f12"
                            stroke="#713f12"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="pt-1 icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M15 16l4 -4"></path>
                            <path d="M15 8l4 4"></path>
                        </svg>
                    </div>
                </Button> */}
            </div>
            <div
                className="absolute inset-0 opacity-50 bg-cover bg-center -z-10 rounded-sm"
                style={import.meta.env.MODE === "production" ? { backgroundImage: `url(${"/abogados-rcg-astro-fromscratch/" + imageRoute})` } : { backgroundImage: `url(${imageRoute})` }}
                />
        </>
    );
}

export default Especializacion;
