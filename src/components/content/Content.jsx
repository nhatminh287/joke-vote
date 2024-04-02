export default function Content(){
    return (
        <div className="w-full tablet:h-[24rem] h-[28rem] border-b border-slate-300" >
            
            <div className="absolute text-gray-600 right-1/2 translate-x-1/2 text-left items-center tablet:w-[50rem] sm:w-[45rem] smalltablet:w-[35rem] w-[25rem] mt-14 ">
                <p>A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their</p>
                <p>babies became adults and made babies, and so on."The child then went to his mother, asked her the same</p>
                <p>question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back</p>
                <p>to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the</p>
                <p>family."</p>
                <div className="sm:w-[622px] h-2 border-b border-slate-200 ml-[50%] translate-x-[-50%] mt-[30px] w-[300px]"></div>
                <div className="sm:w-[460px] w-[400px] flex text-white text-sm gap-x-5 mt-10 ml-[50%] translate-x-[-50%]">
                    <button className="w-[230px] h-[35px] bg-[#2C7EDB] shadow-[0px_4px_2px] shadow-[#1C68BF]">
                        This is Funny!
                    </button>
                    <button className="w-[230px] h-[35px] bg-[#29B363] shadow-[0px_4px_2px] shadow-[#19974D]">
                        This is not funny.
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}