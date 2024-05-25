import React from 'react';
import logo7 from '../../Assets/logo (7).png';
import logo8 from '../../Assets/logo (8).png';
import logo9 from '../../Assets/logo (9).png';

const Value = () => {
    return (
        <div className="mb-8 md:mb-16 mt-12 md:mt-24">
            <h1 className="text-textColor text-3xl md:text-5xl py-8 pb-12 md:pb-16 font-bold w-full md:w-3/4 mx-auto text-center">The value that holds us true account</h1>

            <div className="grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-3 items-center">
                <div className="singleGrid rounded-lg hover:bg-[#eeedf7] p-6 md:p-8">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-2 md:p-4 rounded-full bg-[#dedef8] h-10 md:h-16 w-10 md:w-16 flex items-center justify-center">
                            <img src={logo7} alt="" className="w-full h-auto" />
                        </div>
                        <span className="font-semibold text-textColor text-lg md:text-xl">
              Simplicity
            </span>
                    </div>
                    <p className="text-lg md:text-xl text-textColor opacity-70 py-4 md:py-6 font-semibold">
                        bringing the best thing for you
                    </p>
                </div>

                <div className="singleGrid rounded-lg hover:bg-[#f7edf5] p-6 md:p-8">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-2 md:p-4 rounded-full bg-[#dedef8] h-10 md:h-16 w-10 md:w-16 flex items-center justify-center">
                            <img src={logo8} alt="" className="w-full h-auto" />
                        </div>
                        <span className="font-semibold text-textColor text-lg md:text-xl">
              Simplicity
            </span>
                    </div>
                    <p className="text-lg md:text-xl text-textColor opacity-70 py-4 md:py-6 font-semibold">
                        bringing the best thing for you
                    </p>
                </div>

                <div className="singleGrid rounded-lg hover:bg-[#fcfae3] p-6 md:p-8">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-2 md:p-4 rounded-full bg-[#f3f2ad] h-10 md:h-16 w-10 md:w-16 flex items-center justify-center">
                            <img src={logo9} alt="" className="w-full h-auto" />
                        </div>
                        <span className="font-semibold text-textColor text-lg md:text-xl">
              Simplicity
            </span>
                    </div>
                    <p className="text-lg md:text-xl text-textColor opacity-70 py-4 md:py-6 font-semibold">
                        bringing the best thing for you
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Value;
