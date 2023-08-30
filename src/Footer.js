import githubLogo from './images/github.png'

const Footer = () => {
    return (  
        <footer className='mb-5 font-graphikLight '>
            <div className='flex'>
                <p className='mr-1'>Raiyan Samin 2023 - </p>
                <a href='https://github.com/OhRai' target='_blank' rel='noreferrer' className='flex justify-center items-center underline'>
                    Github <img src={githubLogo} className='h-auto w-5 ml-2 filter invert' alt='GitHub Logo' />
                </a>
            </div>
            <p className='text-center text-sm text-gray-100/75'>Using OpenWeather API</p>
        </footer>
    );
}
 
export default Footer;