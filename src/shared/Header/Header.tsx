import './header.css';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className='header'>
      <Container flex>
        <Link to={'/'}>
          <svg width="188" height="60" viewBox="0 0 188 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2761 23.7542C23.5931 23.7542 23.874 23.8743 24.119 24.1144L26.4098 26.5513C25.1419 28.0911 23.5787 29.2707 21.72 30.0901C19.8758 30.9094 17.657 31.3191 15.0635 31.3191C12.7439 31.3191 10.6547 30.9306 8.79607 30.1536C6.95185 29.3767 5.37418 28.296 4.06305 26.9115C2.75192 25.5271 1.74337 23.8743 1.03737 21.953C0.345792 20.0318 0 17.934 0 15.6595C0 13.3569 0.374608 11.252 1.12382 9.34487C1.87304 7.42363 2.92482 5.77079 4.27917 4.38637C5.64793 3.00194 7.27603 1.92831 9.16348 1.16546C11.0509 0.388486 13.1401 0 15.4309 0C17.7074 0 19.7245 0.367296 21.4823 1.10189C23.2545 1.83648 24.7601 2.7971 25.9992 3.98375L24.0541 6.63253C23.9389 6.80205 23.7876 6.95038 23.6003 7.07752C23.4274 7.20466 23.1824 7.26823 22.8655 7.26823C22.6493 7.26823 22.426 7.21172 22.1955 7.09871C21.965 6.97157 21.7128 6.82324 21.4391 6.65372C21.1653 6.47007 20.8483 6.27229 20.4881 6.06039C20.1279 5.84849 19.7101 5.65778 19.2347 5.48826C18.7592 5.30461 18.2045 5.15628 17.5705 5.04326C16.951 4.91612 16.2306 4.85255 15.4093 4.85255C14.0118 4.85255 12.7295 5.09977 11.5624 5.59421C10.4098 6.07452 9.41562 6.78086 8.57995 7.71323C7.74429 8.63147 7.09593 9.76161 6.63487 11.1037C6.17382 12.4316 5.94329 13.9502 5.94329 15.6595C5.94329 17.383 6.18823 18.9158 6.6781 20.2578C7.18238 21.5999 7.85955 22.73 8.70962 23.6482C9.5597 24.5665 10.561 25.2728 11.7137 25.7673C12.8663 26.2476 14.1054 26.4877 15.4309 26.4877C16.2234 26.4877 16.9366 26.4453 17.5705 26.3606C18.2189 26.2758 18.8096 26.1416 19.3427 25.958C19.8902 25.7743 20.4017 25.5412 20.8772 25.2587C21.367 24.962 21.8497 24.6018 22.3252 24.178C22.4692 24.0509 22.6205 23.952 22.779 23.8813C22.9375 23.7966 23.1032 23.7542 23.2761 23.7542Z" fill="white" />
            <path d="M49.3911 9.23892V30.98H44.053V18.2871C44.053 17.9622 44.0674 17.609 44.0962 17.2276C44.1394 16.8321 44.1898 16.4365 44.2475 16.041C43.9593 16.6908 43.6423 17.2629 43.2965 17.7574C43.2677 17.7856 43.1236 17.9834 42.8643 18.3507C42.605 18.7039 42.2664 19.163 41.8485 19.7281C41.4451 20.2931 40.9841 20.9359 40.4654 21.6564C39.9467 22.3627 39.4208 23.0832 38.8877 23.8178C37.6342 25.5554 36.215 27.519 34.6301 29.7086C34.4284 30.0053 34.1619 30.2949 33.8305 30.5774C33.5135 30.86 33.1461 31.0012 32.7283 31.0012H29.4649V9.26011H34.803V21.953C34.803 22.2779 34.7814 22.6382 34.7382 23.0337C34.7094 23.4152 34.6662 23.8036 34.6085 24.1992C34.9255 23.507 35.2425 22.9348 35.5595 22.4828C35.5739 22.4545 35.7107 22.2638 35.9701 21.9106C36.2294 21.5575 36.5608 21.0984 36.9642 20.5333C37.3821 19.9682 37.8503 19.3325 38.369 18.6262C38.8877 17.9057 39.4136 17.1711 39.9467 16.4224C41.2002 14.6848 42.6266 12.7212 44.2259 10.5315C44.4276 10.2207 44.6941 9.93113 45.0255 9.66272C45.3569 9.38019 45.7315 9.23892 46.1493 9.23892H49.3911Z" fill="white" />
            <path d="M60.0029 25.3435C60.6081 26.0639 61.2636 26.5725 61.9696 26.8692C62.69 27.1658 63.4681 27.3141 64.3037 27.3141C65.1106 27.3141 65.8382 27.1658 66.4865 26.8692C67.1349 26.5725 67.6824 26.1204 68.129 25.513C68.5901 24.9055 68.9431 24.1427 69.188 23.2244C69.433 22.2921 69.5554 21.1972 69.5554 19.94C69.5554 18.6686 69.4474 17.5949 69.2312 16.7191C69.0295 15.8291 68.7342 15.1086 68.3452 14.5577C67.9561 14.0067 67.4807 13.6041 66.9188 13.3498C66.3713 13.0955 65.7445 12.9684 65.0385 12.9684C63.9291 12.9684 62.9854 13.2015 62.2074 13.6677C61.4293 14.1197 60.6945 14.7625 60.0029 15.596V25.3435ZM59.722 12.2055C60.6297 11.2025 61.6599 10.3903 62.8125 9.76867C63.9651 9.14709 65.3195 8.8363 66.8755 8.8363C68.0858 8.8363 69.188 9.08352 70.1822 9.57796C71.1907 10.0724 72.0552 10.7929 72.7756 11.7394C73.5104 12.6717 74.0723 13.8301 74.4613 15.2146C74.8648 16.5848 75.0665 18.16 75.0665 19.94C75.0665 21.5645 74.8432 23.069 74.3965 24.4535C73.9499 25.8379 73.3087 27.0387 72.473 28.0558C71.6518 29.0729 70.6504 29.8711 69.469 30.4503C68.3019 31.0154 66.9908 31.2979 65.5356 31.2979C64.2965 31.2979 63.2375 31.1143 62.3586 30.747C61.4798 30.3655 60.6945 29.8428 60.0029 29.1789V38.0788H54.6648V9.23892H57.9282C58.6198 9.23892 59.0736 9.55677 59.2897 10.1925L59.722 12.2055Z" fill="white" />
            <path d="M99.1155 9.23892V30.98H93.7774V18.2871C93.7774 17.9622 93.7918 17.609 93.8206 17.2276C93.8638 16.8321 93.9143 16.4365 93.9719 16.041C93.6837 16.6908 93.3668 17.2629 93.021 17.7574C92.9921 17.7856 92.8481 17.9834 92.5887 18.3507C92.3294 18.7039 91.9908 19.163 91.573 19.7281C91.1695 20.2931 90.7085 20.9359 90.1898 21.6564C89.6711 22.3627 89.1452 23.0832 88.6121 23.8178C87.3586 25.5554 85.9394 27.519 84.3546 29.7086C84.1528 30.0053 83.8863 30.2949 83.5549 30.5774C83.2379 30.86 82.8705 31.0012 82.4527 31.0012H79.1893V9.26011H84.5275V21.953C84.5275 22.2779 84.5058 22.6382 84.4626 23.0337C84.4338 23.4152 84.3906 23.8036 84.3329 24.1992C84.6499 23.507 84.9669 22.9348 85.2839 22.4828C85.2983 22.4545 85.4352 22.2638 85.6945 21.9106C85.9538 21.5575 86.2852 21.0984 86.6887 20.5333C87.1065 19.9682 87.5747 19.3325 88.0934 18.6262C88.6121 17.9057 89.138 17.1711 89.6711 16.4224C90.9246 14.6848 92.351 12.7212 93.9503 10.5315C94.152 10.2207 94.4185 9.93113 94.7499 9.66272C95.0813 9.38019 95.4559 9.23892 95.8737 9.23892H99.1155Z" fill="white" />
            <path d="M124.532 9.23892L112.45 36.9557C112.292 37.323 112.083 37.5984 111.824 37.7821C111.579 37.9799 111.197 38.0788 110.678 38.0788H106.702L110.851 29.3484L101.882 9.23892H106.572C106.99 9.23892 107.314 9.33781 107.545 9.53558C107.789 9.73336 107.97 9.95939 108.085 10.2137L112.796 21.4868C112.955 21.8683 113.084 22.2497 113.185 22.6311C113.301 23.0125 113.409 23.401 113.509 23.7966C113.639 23.401 113.769 23.0125 113.898 22.6311C114.028 22.2356 114.172 21.8471 114.331 21.4657L118.783 10.2137C118.898 9.93113 119.085 9.69804 119.345 9.51439C119.618 9.33074 119.921 9.23892 120.252 9.23892H124.532Z" fill="white" />
            <path d="M142.392 13.8372C142.234 14.035 142.076 14.1904 141.917 14.3034C141.773 14.4164 141.557 14.4729 141.269 14.4729C140.995 14.4729 140.728 14.3952 140.469 14.2398C140.21 14.0703 139.9 13.8866 139.54 13.6889C139.18 13.477 138.747 13.2933 138.243 13.1379C137.753 12.9684 137.141 12.8836 136.406 12.8836C135.469 12.8836 134.648 13.0532 133.942 13.3922C133.236 13.7171 132.646 14.1904 132.17 14.8119C131.709 15.4335 131.363 16.1893 131.133 17.0793C130.902 17.9551 130.787 18.9511 130.787 20.0671C130.787 21.2255 130.909 22.2568 131.154 23.1609C131.414 24.065 131.781 24.8278 132.256 25.4494C132.732 26.0569 133.308 26.523 133.985 26.848C134.663 27.1587 135.426 27.3141 136.276 27.3141C137.126 27.3141 137.811 27.2153 138.329 27.0175C138.863 26.8056 139.309 26.5796 139.669 26.3394C140.03 26.0851 140.339 25.8591 140.599 25.6613C140.872 25.4494 141.175 25.3435 141.506 25.3435C141.939 25.3435 142.263 25.5059 142.479 25.8308L144.013 27.7379C143.423 28.416 142.782 28.9882 142.09 29.4544C141.398 29.9064 140.678 30.2737 139.929 30.5562C139.194 30.8247 138.43 31.0154 137.638 31.1284C136.86 31.2414 136.082 31.2979 135.304 31.2979C133.935 31.2979 132.645 31.0507 131.435 30.5562C130.225 30.0477 129.166 29.3131 128.258 28.3525C127.351 27.3918 126.63 26.2193 126.097 24.8349C125.578 23.4363 125.319 21.8471 125.319 20.0671C125.319 18.4708 125.55 16.9945 126.011 15.6384C126.486 14.2681 127.178 13.0885 128.085 12.0996C128.993 11.0966 130.117 10.3126 131.457 9.74748C132.797 9.18241 134.338 8.89988 136.082 8.89988C137.739 8.89988 139.187 9.16122 140.426 9.68391C141.679 10.2066 142.803 10.9553 143.797 11.9301L142.392 13.8372Z" fill="white" />
            <path d="M5.46783 54.4482C6.03694 54.4482 6.51601 54.3881 6.90502 54.2681C7.30124 54.1409 7.62182 53.9679 7.86676 53.7489C8.11169 53.5229 8.28819 53.2615 8.39625 52.9649C8.51151 52.6611 8.56915 52.3327 8.56915 51.9795C8.56915 51.5981 8.51512 51.2555 8.40706 50.9518C8.299 50.6481 8.1225 50.3938 7.87756 50.1889C7.63263 49.977 7.31205 49.8146 6.91583 49.7016C6.52682 49.5886 6.04775 49.5321 5.47863 49.5321H2.7123V54.4482H5.46783ZM5.47863 47.572C6.45838 47.572 7.29764 47.6779 7.99643 47.8898C8.70242 48.1017 9.28234 48.3948 9.73619 48.7692C10.19 49.1365 10.5214 49.5744 10.7303 50.083C10.9465 50.5916 11.0545 51.139 11.0545 51.7252C11.0545 52.4386 10.9285 53.0849 10.6763 53.6641C10.4314 54.2363 10.0712 54.7272 9.59572 55.1369C9.12025 55.5465 8.53313 55.8608 7.83434 56.0798C7.14276 56.2988 6.35392 56.4083 5.46783 56.4083H0.183702V41.1513H10.5142V43.0902H2.7123V47.572H5.47863Z" fill="white" />
            <path d="M20.4459 49.7863C20.4459 49.4049 20.3883 49.0517 20.273 48.7268C20.165 48.3948 20.0029 48.1088 19.7868 47.8686C19.5707 47.6214 19.3005 47.4307 18.9763 47.2965C18.6593 47.1552 18.2919 47.0846 17.8741 47.0846C17.0312 47.0846 16.3685 47.3212 15.8858 47.7945C15.4031 48.2677 15.097 48.9317 14.9673 49.7863H20.4459ZM14.9025 51.1849C14.9313 51.7994 15.0285 52.3327 15.1942 52.7847C15.3599 53.2297 15.5796 53.6006 15.8534 53.8972C16.1343 54.1939 16.4657 54.4164 16.8475 54.5647C17.2366 54.706 17.6688 54.7766 18.1443 54.7766C18.5981 54.7766 18.9907 54.7272 19.3221 54.6283C19.6535 54.5223 19.9417 54.4093 20.1866 54.2892C20.4315 54.1621 20.6404 54.0491 20.8133 53.9502C20.9862 53.8443 21.1447 53.7913 21.2888 53.7913C21.4761 53.7913 21.6202 53.8619 21.721 54.0032L22.3802 54.8402C22.1065 55.158 21.7967 55.4265 21.4509 55.6454C21.1051 55.8644 20.7377 56.0445 20.3487 56.1858C19.9597 56.32 19.5598 56.4153 19.1492 56.4718C18.7386 56.5354 18.3388 56.5672 17.9498 56.5672C17.1861 56.5672 16.4765 56.4436 15.821 56.1964C15.1726 55.9421 14.6071 55.5713 14.1244 55.0839C13.649 54.5965 13.2744 53.9926 13.0006 53.2721C12.7341 52.5517 12.6008 51.7217 12.6008 50.7823C12.6008 50.0335 12.7197 49.3343 12.9574 48.6844C13.2023 48.0346 13.5481 47.4695 13.9948 46.9892C14.4486 46.5089 14.9961 46.131 15.6373 45.8556C16.2856 45.573 17.0168 45.4318 17.8309 45.4318C18.5081 45.4318 19.1348 45.5412 19.7111 45.7602C20.2874 45.9721 20.7845 46.2864 21.2024 46.7032C21.6202 47.1199 21.9444 47.632 22.1749 48.2394C22.4126 48.8398 22.5315 49.525 22.5315 50.2949C22.5315 50.6481 22.4919 50.8847 22.4126 51.0048C22.3334 51.1248 22.1893 51.1849 21.9804 51.1849H14.9025Z" fill="white" />
            <path d="M32.4892 47.7203C32.4172 47.8121 32.3487 47.8827 32.2839 47.9322C32.2191 47.9816 32.1254 48.0064 32.0029 48.0064C31.8805 48.0064 31.7508 47.964 31.6139 47.8792C31.4843 47.7945 31.3258 47.7026 31.1385 47.6037C30.9584 47.4978 30.7386 47.4024 30.4793 47.3177C30.22 47.2329 29.8958 47.1905 29.5068 47.1905C29.0025 47.1905 28.5594 47.2788 28.1776 47.4554C27.803 47.632 27.486 47.8863 27.2267 48.2183C26.9746 48.5432 26.7836 48.9423 26.654 49.4155C26.5315 49.8817 26.4703 50.4079 26.4703 50.9942C26.4703 51.6016 26.5387 52.142 26.6756 52.6152C26.8125 53.0885 27.007 53.4875 27.2591 53.8125C27.5185 54.1374 27.8282 54.3846 28.1884 54.5541C28.5558 54.7236 28.9665 54.8084 29.4203 54.8084C29.867 54.8084 30.2308 54.7554 30.5117 54.6495C30.7927 54.5435 31.0268 54.427 31.2141 54.2998C31.4014 54.1727 31.5599 54.0562 31.6896 53.9502C31.8264 53.8443 31.9705 53.7913 32.1218 53.7913C32.3091 53.7913 32.4532 53.8619 32.554 54.0032L33.2132 54.8402C32.9467 55.158 32.6513 55.4265 32.3271 55.6454C32.0029 55.8644 31.6607 56.0445 31.3005 56.1858C30.9403 56.32 30.5657 56.4153 30.1767 56.4718C29.7877 56.5354 29.3951 56.5672 28.9989 56.5672C28.3145 56.5672 27.6733 56.4436 27.0754 56.1964C26.4847 55.9421 25.966 55.5783 25.5193 55.1051C25.0799 54.6248 24.7305 54.042 24.4712 53.3569C24.219 52.6647 24.093 51.8771 24.093 50.9942C24.093 50.196 24.2082 49.4579 24.4387 48.7798C24.6693 48.0947 25.0043 47.5049 25.4437 47.0104C25.8904 46.516 26.4415 46.131 27.097 45.8556C27.7526 45.573 28.509 45.4318 29.3663 45.4318C30.1659 45.4318 30.8683 45.5589 31.4734 45.8132C32.0858 46.0675 32.6297 46.4277 33.1051 46.8939L32.4892 47.7203Z" fill="white" />
            <path d="M42.6831 47.7203C42.6111 47.8121 42.5427 47.8827 42.4778 47.9322C42.413 47.9816 42.3193 48.0064 42.1969 48.0064C42.0744 48.0064 41.9447 47.964 41.8078 47.8792C41.6782 47.7945 41.5197 47.7026 41.3324 47.6037C41.1523 47.4978 40.9326 47.4024 40.6732 47.3177C40.4139 47.2329 40.0897 47.1905 39.7007 47.1905C39.1964 47.1905 38.7534 47.2788 38.3715 47.4554C37.9969 47.632 37.68 47.8863 37.4206 48.2183C37.1685 48.5432 36.9776 48.9423 36.8479 49.4155C36.7254 49.8817 36.6642 50.4079 36.6642 50.9942C36.6642 51.6016 36.7326 52.142 36.8695 52.6152C37.0064 53.0885 37.2009 53.4875 37.453 53.8125C37.7124 54.1374 38.0222 54.3846 38.3824 54.5541C38.7498 54.7236 39.1604 54.8084 39.6142 54.8084C40.0609 54.8084 40.4247 54.7554 40.7056 54.6495C40.9866 54.5435 41.2207 54.427 41.408 54.2998C41.5953 54.1727 41.7538 54.0562 41.8835 53.9502C42.0204 53.8443 42.1644 53.7913 42.3157 53.7913C42.503 53.7913 42.6471 53.8619 42.748 54.0032L43.4071 54.8402C43.1406 55.158 42.8452 55.4265 42.521 55.6454C42.1969 55.8644 41.8547 56.0445 41.4945 56.1858C41.1343 56.32 40.7597 56.4153 40.3707 56.4718C39.9816 56.5354 39.589 56.5672 39.1928 56.5672C38.5084 56.5672 37.8673 56.4436 37.2693 56.1964C36.6786 55.9421 36.1599 55.5783 35.7133 55.1051C35.2738 54.6248 34.9244 54.042 34.6651 53.3569C34.413 52.6647 34.2869 51.8771 34.2869 50.9942C34.2869 50.196 34.4021 49.4579 34.6327 48.7798C34.8632 48.0947 35.1982 47.5049 35.6376 47.0104C36.0843 46.516 36.6354 46.131 37.291 45.8556C37.9465 45.573 38.7029 45.4318 39.5602 45.4318C40.3598 45.4318 41.0622 45.5589 41.6674 45.8132C42.2797 46.0675 42.8236 46.4277 43.2991 46.8939L42.6831 47.7203Z" fill="white" />
            <path d="M57.8108 45.5695V56.4083H55.7253V49.8711C55.7253 49.6451 55.7397 49.3908 55.7685 49.1082C55.7973 48.8187 55.8333 48.5502 55.8766 48.303L52.3646 54.4906C52.2926 54.6177 52.1989 54.7201 52.0837 54.7978C51.9684 54.8684 51.8387 54.9038 51.6947 54.9038H51.4461C51.302 54.9038 51.1724 54.8684 51.0571 54.7978C50.949 54.7201 50.859 54.6177 50.7869 54.4906L47.2102 48.2712C47.2534 48.5185 47.2894 48.7904 47.3182 49.0871C47.3542 49.3767 47.3723 49.638 47.3723 49.8711V56.4083H45.2759V45.5695H47.1777C47.3362 45.5695 47.4911 45.6048 47.6424 45.6754C47.8009 45.7461 47.9378 45.8838 48.053 46.0886L51.0463 51.1107C51.1472 51.2944 51.2372 51.4921 51.3164 51.704C51.4029 51.9159 51.4857 52.1278 51.565 52.3397C51.6442 52.1278 51.7271 51.9159 51.8135 51.704C51.9 51.4921 51.9936 51.2944 52.0945 51.1107L55.0445 46.0886C55.1526 45.8767 55.2858 45.739 55.4443 45.6754C55.6028 45.6048 55.7613 45.5695 55.9198 45.5695H57.8108Z" fill="white" />
            <path d="M67.891 49.7863C67.891 49.4049 67.8333 49.0517 67.7181 48.7268C67.61 48.3948 67.4479 48.1088 67.2318 47.8686C67.0157 47.6214 66.7455 47.4307 66.4214 47.2965C66.1044 47.1552 65.737 47.0846 65.3191 47.0846C64.4763 47.0846 63.8135 47.3212 63.3308 47.7945C62.8482 48.2677 62.542 48.9317 62.4123 49.7863H67.891ZM62.3475 51.1849C62.3763 51.7994 62.4736 52.3327 62.6393 52.7847C62.805 53.2297 63.0247 53.6006 63.2984 53.8972C63.5794 54.1939 63.9108 54.4164 64.2926 54.5647C64.6816 54.706 65.1138 54.7766 65.5893 54.7766C66.0431 54.7766 66.4358 54.7272 66.7671 54.6283C67.0985 54.5223 67.3867 54.4093 67.6316 54.2892C67.8766 54.1621 68.0855 54.0491 68.2584 53.9502C68.4313 53.8443 68.5898 53.7913 68.7338 53.7913C68.9211 53.7913 69.0652 53.8619 69.1661 54.0032L69.8252 54.8402C69.5515 55.158 69.2417 55.4265 68.8959 55.6454C68.5501 55.8644 68.1827 56.0445 67.7937 56.1858C67.4047 56.32 67.0049 56.4153 66.5942 56.4718C66.1836 56.5354 65.7838 56.5672 65.3948 56.5672C64.6312 56.5672 63.9216 56.4436 63.266 56.1964C62.6176 55.9421 62.0521 55.5713 61.5695 55.0839C61.094 54.5965 60.7194 53.9926 60.4456 53.2721C60.1791 52.5517 60.0458 51.7217 60.0458 50.7823C60.0458 50.0335 60.1647 49.3343 60.4024 48.6844C60.6474 48.0346 60.9931 47.4695 61.4398 46.9892C61.8936 46.5089 62.4411 46.131 63.0823 45.8556C63.7307 45.573 64.4619 45.4318 65.2759 45.4318C65.9531 45.4318 66.5798 45.5412 67.1562 45.7602C67.7325 45.9721 68.2296 46.2864 68.6474 46.7032C69.0652 47.1199 69.3894 47.632 69.6199 48.2394C69.8577 48.8398 69.9765 49.525 69.9765 50.2949C69.9765 50.6481 69.9369 50.8847 69.8577 51.0048C69.7784 51.1248 69.6343 51.1849 69.4254 51.1849H62.3475Z" fill="white" />
            <path d="M74.4664 53.6959C74.7906 54.1056 75.1436 54.3952 75.5254 54.5647C75.9144 54.7272 76.3431 54.8084 76.8113 54.8084C77.719 54.8084 78.425 54.4835 78.9293 53.8337C79.4408 53.1838 79.6965 52.2161 79.6965 50.9306C79.6965 50.2666 79.6389 49.7016 79.5236 49.2354C79.4083 48.7621 79.2427 48.3772 79.0265 48.0805C78.8104 47.7839 78.5475 47.5684 78.2377 47.4342C77.9279 47.3 77.5785 47.2329 77.1895 47.2329C76.5988 47.2329 76.0873 47.3601 75.6551 47.6143C75.23 47.8616 74.8338 48.2183 74.4664 48.6844V53.6959ZM74.3475 47.1693C74.8086 46.6396 75.3309 46.2123 75.9144 45.8873C76.5051 45.5624 77.1895 45.4 77.9675 45.4C78.5871 45.4 79.149 45.5236 79.6533 45.7708C80.1576 46.011 80.5898 46.3641 80.95 46.8303C81.3102 47.2965 81.5876 47.8757 81.7821 48.5679C81.9838 49.2531 82.0846 50.0406 82.0846 50.9306C82.0846 51.7288 81.973 52.474 81.7496 53.1662C81.5335 53.8513 81.2201 54.4482 80.8095 54.9567C80.3989 55.4582 79.9018 55.8538 79.3183 56.1434C78.7348 56.4259 78.0756 56.5672 77.3408 56.5672C76.6924 56.5672 76.1413 56.4648 75.6875 56.2599C75.2408 56.0551 74.8338 55.7726 74.4664 55.4123V60H72.1431V45.6013H73.5479C73.8649 45.6013 74.0666 45.7461 74.153 46.0357L74.3475 47.1693Z" fill="white" />
            <path d="M93.4036 47.3177H89.3405V56.4083H87.0172V47.3177H82.9434V45.6013H93.4036V47.3177Z" fill="white" />
            <path d="M104.507 45.6013V56.4083H102.195V51.5027H97.4291V56.4083H95.1058V45.6013H97.4291V49.7863H102.195V45.6013H104.507Z" fill="white" />
            <path d="M111.723 54.7554C112.062 54.7554 112.357 54.7131 112.61 54.6283C112.869 54.5365 113.081 54.4164 113.247 54.2681C113.42 54.1127 113.546 53.929 113.625 53.7171C113.712 53.5052 113.755 53.2721 113.755 53.0178C113.755 52.7918 113.715 52.5799 113.636 52.3821C113.564 52.1773 113.445 52.0007 113.279 51.8524C113.121 51.697 112.912 51.5769 112.653 51.4921C112.393 51.4003 112.076 51.3544 111.702 51.3544H109.551V54.7554H111.723ZM111.691 49.7122C112.455 49.7122 113.099 49.804 113.625 49.9876C114.151 50.1642 114.576 50.4044 114.9 50.7081C115.225 51.0118 115.459 51.365 115.603 51.7676C115.747 52.1632 115.819 52.5764 115.819 53.0072C115.819 53.5087 115.729 53.9679 115.549 54.3846C115.369 54.7943 115.102 55.151 114.749 55.4547C114.403 55.7584 113.975 55.9951 113.463 56.1646C112.959 56.327 112.379 56.4083 111.723 56.4083H107.347V45.6013H109.551V49.7122H111.691ZM120.336 45.6013V56.4083H118.013V45.6013H120.336Z" fill="white" />
            <path d="M132.869 45.6013V56.4083H130.546V49.638C130.546 49.4897 130.553 49.3272 130.567 49.1506C130.582 48.974 130.603 48.7939 130.632 48.6103C130.56 48.7657 130.488 48.9105 130.416 49.0447C130.351 49.1718 130.279 49.2884 130.2 49.3943L125.413 55.8467C125.326 55.9809 125.211 56.1116 125.067 56.2387C124.923 56.3588 124.761 56.4189 124.581 56.4189H123.176V45.6013H125.499V52.3715C125.499 52.5199 125.489 52.6859 125.467 52.8695C125.453 53.0532 125.431 53.2368 125.402 53.4204C125.546 53.0955 125.694 52.8271 125.845 52.6152L130.632 46.1734C130.719 46.0321 130.834 45.9015 130.978 45.7814C131.122 45.6613 131.284 45.6013 131.464 45.6013H132.869ZM128.158 42.9101C128.439 42.9101 128.673 42.8819 128.86 42.8254C129.055 42.7618 129.209 42.6629 129.325 42.5287C129.44 42.3874 129.523 42.2073 129.573 41.9883C129.624 41.7623 129.649 41.4833 129.649 41.1513H131.01C131.176 41.1513 131.299 41.222 131.378 41.3632C131.457 41.4974 131.497 41.6458 131.497 41.8082C131.497 42.1685 131.417 42.4934 131.259 42.783C131.108 43.0655 130.888 43.3092 130.6 43.514C130.312 43.7118 129.959 43.8672 129.541 43.9802C129.13 44.0862 128.669 44.1391 128.158 44.1391C127.646 44.1391 127.181 44.0862 126.764 43.9802C126.353 43.8672 126.004 43.7118 125.715 43.514C125.427 43.3092 125.204 43.0655 125.046 42.783C124.894 42.4934 124.819 42.1685 124.819 41.8082C124.819 41.6458 124.858 41.4974 124.937 41.3632C125.017 41.222 125.139 41.1513 125.305 41.1513H126.666C126.666 41.4833 126.692 41.7623 126.742 41.9883C126.792 42.2073 126.875 42.3874 126.991 42.5287C127.106 42.6629 127.257 42.7618 127.444 42.8254C127.639 42.8819 127.877 42.9101 128.158 42.9101Z" fill="white" />
            <path d="M150.475 56.4083H148.162V47.3177H143.397V56.4083H141.073V45.6013H150.475V56.4083Z" fill="white" />
            <path d="M158.08 45.4318C158.894 45.4318 159.629 45.5624 160.285 45.8238C160.947 46.0851 161.509 46.4559 161.97 46.9363C162.438 47.4166 162.799 47.9993 163.051 48.6844C163.303 49.3696 163.429 50.1395 163.429 50.9942C163.429 51.8488 163.303 52.6188 163.051 53.3039C162.799 53.9891 162.438 54.5753 161.97 55.0627C161.509 55.543 160.947 55.9138 160.285 56.1752C159.629 56.4365 158.894 56.5672 158.08 56.5672C157.259 56.5672 156.517 56.4365 155.854 56.1752C155.198 55.9138 154.637 55.543 154.168 55.0627C153.7 54.5753 153.34 53.9891 153.088 53.3039C152.836 52.6188 152.71 51.8488 152.71 50.9942C152.71 50.1395 152.836 49.3696 153.088 48.6844C153.34 47.9993 153.7 47.4166 154.168 46.9363C154.637 46.4559 155.198 46.0851 155.854 45.8238C156.517 45.5624 157.259 45.4318 158.08 45.4318ZM158.08 54.7872C159.074 54.7872 159.813 54.4623 160.295 53.8125C160.785 53.1556 161.03 52.2197 161.03 51.0048C161.03 49.7899 160.785 48.854 160.295 48.1971C159.813 47.5331 159.074 47.2011 158.08 47.2011C157.072 47.2011 156.322 47.5331 155.832 48.1971C155.343 48.854 155.098 49.7899 155.098 51.0048C155.098 52.2197 155.343 53.1556 155.832 53.8125C156.322 54.4623 157.072 54.7872 158.08 54.7872Z" fill="white" />
            <path d="M175.329 56.4083H173.006V47.3707H169.937C169.85 48.7198 169.717 49.8852 169.537 50.867C169.364 51.8418 169.155 52.6682 168.91 53.3463C168.665 54.0244 168.392 54.5753 168.089 54.9991C167.786 55.4159 167.466 55.7408 167.127 55.9739C166.789 56.207 166.439 56.3624 166.079 56.4401C165.726 56.5177 165.369 56.5566 165.009 56.5566C164.31 56.5566 163.961 56.4436 163.961 56.2176V54.7872H164.566C164.804 54.7872 165.045 54.7484 165.29 54.6707C165.542 54.593 165.784 54.4411 166.014 54.2151C166.245 53.982 166.464 53.6571 166.673 53.2403C166.889 52.8236 167.084 52.2762 167.257 51.5981C167.437 50.9129 167.592 50.083 167.722 49.1082C167.851 48.1264 167.952 46.9574 168.024 45.6013H175.329V56.4083Z" fill="white" />
            <path d="M184.791 46.2158C184.906 46.0321 185.061 45.8838 185.255 45.7708C185.457 45.6578 185.666 45.6013 185.882 45.6013H187.697L184.985 49.6592C184.812 49.9347 184.632 50.1572 184.445 50.3267C184.258 50.4962 184.027 50.6269 183.753 50.7187C184.106 50.8176 184.398 50.9695 184.629 51.1743C184.866 51.3721 185.079 51.6299 185.266 51.9477L188 56.4083H186.401C185.99 56.4083 185.67 56.3412 185.439 56.207C185.216 56.0728 185.025 55.875 184.866 55.6136L182.997 52.4563C182.846 52.1879 182.647 51.9901 182.402 51.863C182.158 51.7358 181.88 51.6723 181.57 51.6723H180.479V56.4189H178.156V45.6013H180.479V50.1466H181.419C181.722 50.1466 181.974 50.0901 182.176 49.977C182.377 49.864 182.55 49.691 182.694 49.4579L184.791 46.2158Z" fill="white" />
          </svg>
        </Link>
        <ul className='header__list'>
          {/* <li className={`header__item ${pathname === '/' ? 'header__item-active' : ""}`}> */}
            <Link className={`header__item ${pathname === '/' ? 'header__item-active' : ""}`} to={'/'}>
              <Text color='#fff' size={24} weight={400} font='Lora'>Главная</Text>
            </Link>
          {/* </li> */}
          {/* <li className={`header__item ${pathname === '/gallary' ? 'header__item-active' : ""}`}> */}
            <Link className={`header__item ${pathname === '/gallary' ? 'header__item-active' : ""}`} to={'/gallary'}>
              <Text color='#fff' size={24} weight={400} font='Lora'>Галерея</Text>
            </Link>
          {/* </li> */}
          {/* <li className={`header__item ${pathname === '/histories' ? 'header__item-active' : ""}`}> */}
            <Link className={`header__item ${pathname === '/histories' ? 'header__item-active' : ""}`} to={'/histories'}>
              <Text color='#fff' size={24} weight={400} font='Lora'>Истории</Text>
            </Link>
          {/* </li> */}
        </ul>
        <Link to={'/form'} className='header__item-reg'>
          <Text size={24} font='Lora' color='#fff'>
            Принять участие
          </Text>
        </Link>
      </Container>
    </header>
  );
}