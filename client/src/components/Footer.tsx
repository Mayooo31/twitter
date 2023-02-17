import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-start gap-2 flex-wrap overflow-auto">
      <a href="#" className="text-[13px] text-[#fcfcfc88] font-normal hover:underline">
        Smluvní podmínky
      </a>
      <a href="#" className="text-[13px] text-[#fcfcfc88] font-normal hover:underline">
        Ochrana osobních údajů
      </a>
      <a href="#" className="text-[13px] text-[#fcfcfc88] font-normal hover:underline">
        Zásady používání souborů cookie
      </a>
      <a href="#" className="text-[13px] text-[#fcfcfc88] font-normal hover:underline">
        Zpřístupnění
      </a>
      <a href="#" className="text-[13px] text-[#fcfcfc88] font-normal hover:underline">
        Informace o reklamách
      </a>
      <a href="#" className="text-[13px] text-[#fcfcfc88] font-normal hover:underline">
        Více...
      </a>
      <a className="text-[13px] text-[#fcfcfc88] font-normal">© 2023 Twitter, Inc.</a>
    </div>
  );
};

export default Footer;
