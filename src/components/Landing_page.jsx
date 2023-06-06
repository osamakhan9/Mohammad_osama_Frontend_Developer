import React from 'react'
import './Styles/landing.css'

function Landing_page() {
  return (
	<div>
		 <div className="NavbarSection">
      <div>
    
        <i classNameName="fa-solid fa-bars"></i>
      </div>
      <div>

        <h1>Welcome to <span>Spacex</span></h1>
        <button>CRS-28 MISSION</button>
        <button>REWATCH</button>
        
      </div>
    </div>
    
    <div className="WORK_SECTION">
        <h1>Discover Our Work</h1>
        <div>
          <div>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/230510142015-02-spacex-vast-private-space-station-launch.jpg?c=original"
              alt=""
            />
            <div>
              <img
                src="https://wp.technologyreview.com/wp-content/uploads/2021/12/48953946911_7dae1036a2_o.jpg"
                alt=""
              />
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgSFRYZGBgYGBgYGBwZGBgYGhgYGBgZGhoYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjErISE0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMMBAgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEQQAAIBAgMEBwUECAUDBQAAAAECAAMREiExBAVBURMiYXGBkaEGMrHR8EJSweEUFSNicpKisgckgsLxQ3PSM1NUY5P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIhEBAQEBAQEBAAICAwEAAAAAAAERAhIhMQNRMkEiYXET/9oADAMBAAIRAxEAPwCZGEnUiVIavPUvLyee1ho6NK5a8JdYvJ+vqwHjs95ASYSmK8rnaSIRCEFk4qXTgRwIgIaiTV86YCEFhAQsMnV4SiGojAQgJPVXzzRCEBEqyRVmPXTbnk6iSokytz76pbS9SmhN6bYTe1nGmNOa3BHlzEubz3rS2ZBUrPgVmwjIm5sToOwTPqtueYu08724Gx+vGTKsz91b0o1wTSqK+eYB6w01U5iaOKZXa1mSAIjQjCVLx7IWWorSanRktOjLSJaZ9da055xDToSwFhAQgJnh6ECEBCCx7wxNpARFhALyPHnEM/tIXgFoOLn5RQMf1rFBwdkUMGvN8MLDDAkoty9Z9Hr5nECydYggPGSpQPDOTbFcyom7oyLJmQ8RaJUhvw7LpIskwQlWM0z6rXiAENRBlpKeUw66x1cc6jAhiSmhaDhk+9aeMCJMiQVSTIJn10055OqTG9rd5DZ9mchrO4KJzF8i+XBQb+UxfahNoSs70arUgVWocFyWw9UlkY2Y4rDq2vcXDGcVvrfFeu+KuoDBFSy5KoDXJw3OEkgX55cLRTKrq5Bbr2+ps7CpSazixHFXXip+8py08Jr+03tMu1pT6hTCDcGzDGScWHmMl17ZzDLlYC2IKTlkRle3Pj5CbdOqqN+1p0yz0UwC2LCaiKwcjFYPhN8+PDO4VE/C2HeQQWNxYlgosmZw5m+Wg1Fjneeg+w+3PXNYs7uiYAgfDiAZSWuQOsbjXlOFV0xpWAUJTKYnUXzHEriBdgRfT7Otjed/7DVUqVNqqISUd6bAsLE3VrsRYWJNzYAAXyytM+rkXxPrqVSTJTkqrJFWYa6MwyLDCxwIURWkFjxsQiJgkxMBl5yUCILAahKxBJY6OEKUPIvUQClJFSTrThBZU5Re0PRxSe4ileIn1Xl4pxYJKBCCz2deL5QhZIt4YSEEho8mxsdSfOGoHERBJIFiuKmmC8ofQ30iVZKok2q5iqaRvJEbOTOLiVwtjMO5v10/x9Z8XVN4hSgo4uM7S0g5Tl6t5d3MnSMUYYpS7TTnJhREyv8AJWs/jjm96bm6V0qAgOgcKGXEjB8OLEAQb9UWIORzsZ5z7YbqeilPpEJcoFeoMJVymEDCRY4QoXIqDfEc7z2voROH/wAWEtsif95f7Hj47t6kR/JxJza8p2BGJsLWJGR05Huy4y9tuIFFdVBwLoSWwFicTMT79mAsbW6o7JHuRcVRFOYLKCO8zd9r93rs+07VTGaOqVU42LOhNzbIXaqOH2Zrb/yxjJ81nbuVQ9MmmXUuTYi+MA5qFB4Af1dmXpHsPtyvtO1BhgdmSyEYCAispAXgFFha+gE4jdpUfoxLjEXVsYZgaZ6wCm9hm2Brgn3czO79i6SjadrYsHZTSAc2JN1fEQeAJHlaZd/jTj9doBCEBao4xjtI5TKRralj2kI2rskq1r8PryjwtEFENacSnsPpJVUxyJvRBIshCwx8EvEaHFFiMclRxjGqseUthwDCCyJto5CRmsTH5Tq1hjSrjPMxQwa4ILHCwwsMLPR9PM8gCwwsILDVYej8gCwwJIqXhGiddYr1Irni1GBJVgqslVYvSsw2CMdnvJQkIXkWriq2ykcLyag1tbydahHKGKoOoEy652N+Oso6FSW1aQUivK0nV1E5euLvyOzn+TnPtHinCf4tH/KJ/wB5f7HncdMs4D/FrbENBKQ9/H0hHJACgJ7yxt/CYccdTqXE/wAnfN5sled7gNqqH99fjNz/ABIpdDtXRoTgNJLAnJVxFgi/uAi4HC9tAAOV2aoVBYGxFiDyIORnV0HXbK7VS+J3oY/2nWw1xdTRQHKzZ4RlkRpNrPusZfmKmwb1UvQRA2FOjDqHJxOMaFlGWG6Naw5az0P2DKPX2s01wp+xCpYDCFDi1h3Z9t5xibI4/RFNusyGmbIaao5qHC9kxAlhocVwDrw7H2N2K22bUzqodCligwLdw+M4AbXvcdljI651c6x3K0OySLs44gQBfifWNg7RJnEO91KEUQwy8pEEHP0hgDtlTmIvVSioOUfGZGGHKFi7I/KdIs3ORsh7ZLiMWIwynsQdEeUcUj/xJsRhBzDKWxCKUlCQscRcx+R6N0YiixmKGDXBgQgJGrQ1M6fTm8pAIYEBTDDQ9DyILJUYyMGGDFaJzYmR+aj4SRXX7sgBhqZNxpLUylfu+sfADw8jBV4QeLTwPQDthDZxwPpCBhgxaIj6A8x5RdE0mvFDTQYGHCeOe3lUttm03Puikq9gwqbDsuzHxM9rJnmvtpuAI77Y7K5qsAVCMoXAnV+2b5KOEU6mq82x5qjdU+E3fZeoih+k9woV54WYoEe1iTha2Qzzl/YtzpVyACAAk4UHWP2QWIJAy4TM3NtZ2Z3HVxYXRksQSjZOuIZDhnqMMn0fnMbLLSB2drkrdDWBSzYv2l1SoE90AaEnPTTLtvYcKNo2ro2xJajhN2OVnt7+fbnnnnc5zhtk29w9IogBTAC10RDZrg1CwsBiKnEcsuM7r2MbHtO1sQAT0JNnxgkhyCHsMQwlc+OvGK3DzXao8IGAtJZIqrF6v9H5n9jAhqsFW5CF0kW0ZEipCAEh6SK8f0viYkRi3ZIrxXlEkxR8fcJFePeBDLHnGg3ivFowUUG8UNGPPlqQ1qSitSGKk1Ri+tSGKkoCpDWpAYvipJBUmetSGKkBi+ryRXlAVIS1IjkaKvCFSUVqQ1qSauRfV4YqTPFSGKsnT8r4eEHlEVIQqQ0/K8rTmP8AEJ/8sP4/9jTcFSc17fv/AJYfx/7Wi5/Tu4yvY62PPiBy5NOC3js2GsVAdRezB8Ya5N9GAYgkKc/lO29km6w+uBlf24TFvCnoThpAKVLYh175DW2WUJf+VHU2RhVKFilmurYcQC3KHMa65DlzFrzvv8Ouq+0DktEA3BuAHF7jI6fmZxjbOjPszAYnZ0BQhj0gDPiGS2b7AsCbZ5G9h2PsMVFbasOV8FxhwYTjqXXDwtDqiR3weEHlMVIQqTP0flcDx+klMVI/Sw9Dyt9JH6SUxVj9LD0PK50kXSSn0sXSx6PK50kXSSn0sXSw0eVzpIuklPpYulho8xc6SKUuljRaPMcCGhBpnir2N9d0lWp2+s63MvBoYaUBVHMfzQhUHMfzfnAL4aGGlA1ANWA72tCFdfvL/N+cFNBWhq8zVqg6Ovhn/uhK37w9fnEJWqrQw0y0qfvf0t85Mt+Y8j85NXGgGhhpnqT94eX5yRb8x5H5yVRfDQlaUlB+gfnJBf6vJtVF1WnN+3zf5Zf4/wDY03FM5r29Y/o6csef8jaRc36Op8Zvsq9nH1wMH2yw/p6YjYYafWvbCBjvn2/hKm4HcG6hTYcSfwEse1r229CRdQtK65Z+/bXL/mE/aL/jETPf9EBGHr0hjxDqZ1cDWw8sTX4YM+Fui9i3/bbTkL9S5F7OcdTrgm5IPedNTOWRwF2W7BlV0JTq3wk1S2makWw5+9j7BOj9jnvVrkG6lUKHFiOAvUw3bie25vrfOLr8Pn9dtjiNQCwJ1NhKjGwuSQBqb6SnU2+kDfGSRyz9bWmcqrMa1GuGva+XOShpgfrGmNC/9Ij/AK2HDF5r8oy1v4o+Kc/+tTe2nfaS/pr2vhuOYGIea5Rm28UWKYA3qfq8cb47B6/OGFrexRYphjfI+76w130vFT/N+UX0tjZxRYpkDfSfdPpH/XNP7renzj+jY1LxTL/XFPkfT5xQGx5aNoAyy8FT4iGdrFrYT4sD6YZm3PIxxeb6xxoDav3R6/MRztAPEeRB+BlFUPEgd5+V5dobJfWoijnx9bGGjFik4tkmLz/KEFP2kI/1KB5WvJKe5r5ioSOYAF/WSrudQc3cjkPnHlGxHSDKcSgjyb42k9Xb6gHv+SqTJU2CmNFY97v+Bh7ZXpp1mplv5T6Mfwh9GxWXaqh+238rj+0RJXq3yZj3l/hI/wBfk+4iD+Jh+UF9+1PvIOwB8/EfOTacX06dzmzr4OPh84zJXBzcryLVMN+4YryjV3lTYDFjvx6zlT3AuLeIlRdpS/VDDuwknzF/WLVY2GovfEzA8zhqZ95wfjLWy7wdRm9JVGgLPc+C3I8ZlpRZxiCue18h5sAPWTDd5IxY6QAGfXX8FMm1UjoKe8l16Snf+OoR/KRMb2z2nHQXrq3X+yGFuq2tzn5SFdvVMgdmfvpubdzBReZ/tDvHpKQXDTWzX6isp0IzuLcYT9FvwO5HOeunyk3tXUxbehS+O1PD1f475NbPTiNJT3O2ufCVt/bQ77SrVGubICwAy961gtsteWsJ/lRf8Ur9ZKCohxY0wsbAYiagwA3+0bHO3uHlOu9kyv6RtOEWyTELABXxPiUAcBOLRn/Zi7WxpYBQet+0AZb+9YYhbttwmzuOpVDVSi1GNkuykqSAX67W1ub8ecXU+Dm/XolbFhOAAtlYMSAc8wSAbZdk5DbNnqozXRrXOaKxT/SbaD8IFLfFQHrIWF87lySO8ubeU2Nn9oKVlxKyDU4WqEg9uEdYdl5nPi79c9+kwl2qdA+/KDVAC2JCBmwOulirJc8/el1d3bNWGJVRhxKEDPtwaR6ny5b9MBzI9T9CWE2hR1kqFTyIZW8GW/4TQ3j7MKReg1mvmrsSCOw2uD3zmNr2Z6TYXQqe0ZHtBGRjllFljfXeVTVgtQfvKH8mHWEkG37O/vI6HmrBx5PmPCcutQ8L5cr5eUIbWed+/P4wLXU9BTb3K6HsfFTPd1riJ911QLhCRzXC/wDYb+k5Vtr0GEHna4y8MvSWKO1quYLoeaP+Q+MPo2NR0ZTYix5G6nyYQDi5Hyv8DBpb9qjqjaDblVQNceTQjvzPr0aLjiUUoT/qX5Q2l8NjP0G+UUL9c0P/AIx//d4obRkcOb84IvNg0lOq+tow2ZPun+b8pp7hf/OsoExYyDe9jA2ypmVAsB6/lIMdoek4vtt7kWLvb+I2+MVHbSnuhb/eKhj5tp4TOxxw8PVGNGrvF3993N/3sI8gLSHGOAt3m/wtKgaGDC01npB23iSpY3sDwzzHfbnK2KPitFpr42tr3AQcckQa+F4abyqAWV2A0yNvK2kzukiFSGhffana2J3a2YxOzZ88zG6U8z5mVlcf8H5whY6EjvkmnDyrtb3JHDB/u/IQ0QniPOQ7WhViD9zv+1HP0Yv7rqkOq8GD3HO2EiZ+2uManUdS4PHNuXhLe7W66HkH+CzO3ldKqh8j1SOPExz9F/E+LNb2NioItnhFyT6rN7c3SKzinUwZIOq17Ld8KdXS19OF5zdasoYAsBYrlc5WuLG3f28Jt+z2zGsXKMLrhJuWUFji06pJHlDv8HP61HoOSS9UMeOIYj6mCjEZDDnl7q59uenfNWluZ2zeqBloi/BnJ/tmvQpUqCG7AJkWLlbfAd9ph6b4wNg3YxqDpVODiQ9O2mQ6zYfDXsnV7OqKmGgURuDEIzdoYIRfziR0qoG6rowuLi4I7jMLeVKmrkJTpFVW746gTM55LjBGRGoi22jI65RpcZ8Tz7YG07KtRTTcBlPoeBHIzi9n26iLhgydtGqfgxIPnL9OsjCy7dVTsqMb+YIHrDBrI3pu7o3aniwspyYHIg5jTT8JRe9jchiNTxz5EH4ibb+zwf3K9N7m+oJv4FpWf2ZrJ/00Ya3VrHyY3lzrE2MSnTYrZSpz0vZx2WJ+EBsSkYgRwFwcr5nUHS0ubTsNRT10IH76MPJrSNKrrkpDW+y3WHgSMpc6ReThuIv4HLKLCdcR8QBb5y7s++EXquhTtW9rnMmXTtC1F/ZOmLLUAkjiLN8Y/X/Ref8Ati4T94+X5xpsYH+4nl+cUPUHmsIsYxJhGCJlrXAutxY/CVX3cvAnuyly8eP0XmVkPu975L6yI7Kw1Uibd/rOOpPM+Er0nxGD0JHb3GP0Jt6zoAPrKSqo+hF7HhzTUSNcvMQloNw/H5To1op90eUlSgnIeUPR+HMjZm5DllzhLs5PD1nT9EmpA9BIK1ZBp8SB9d0PQ8Rh/oLai/r8oa7G3MSxtO1dnmx8tc5GrO2QI5m2gHaw74aWRLs+xKT1nsO24/tDEytvuiEcAaYB9gp9o8GzOmsmqMqDNizZZZD5mZm8arlgQMQK8rWzva3Lzj523R1ki1u1SXUDMkOB5CZO9K+OoGsRkosdeYPrJqdd7rZGyIJ56qePdJdo2AviqkFSoLcCCFtl32AlSyX6my2fGVtjddu/8BNncG8noo5RsJdlBNlOgbLMTLbZmcu6gWQYmJNsrDTmeyam4NkDq4YHqlTkDxDDTUy+sz6jmX18ddup9proGeuqKcxbCXPgLWHjLO07p2lzZtpBXT3LjvwXsTORehhHVcADPJyp7e+W92bwdSTjJBFh1xYZEEE+MyvM/Y12/la1WnXpKUauVVTpTIRc+Ascu4DnK67PROoxE5kks1z2mVqtJ6jdYhiv2Qbhb92Us093PxNvED4ZwVP/ABLS6NdFVR5/GV6xpnOykcOF+fu/KW13cD7zelx66yOrus3upU9nu/OKYd3+kapTtkoP8It6yGrvirSIFN3TK9sZYEH929pO6MB1lI8MvPT1lPaaKuwBYDLINkfDzhP1PX40Nn9ta6++EfvFv7bTQp+0OzVv/VoAE8VNjfxtfzmTsu6algGZUHmR5ZestPuNGGbuTzvbyEM5EnS5X2bZmVuieqW4LgBCngGY2HrMFdkqF7GmPtXbF1T90jCQdba3lynuytSv0VWwPBkUg+IkdSrXT36SuB9w5d5Q6mOTPwr9/UPR7Z97+pYpN+san/sP/MYobf6LJ/dVbwS8GCXkLSXMcEcZEHj4oGlD8oscgDQ1W8MCcOYamRonL/iSdIF7TfwiNKhP1lBq7UFNh4mVK21k5KcuJ+Uqlo8Fq3WrE65+Okza9ck2uNYO01jp4n65SBXH19aSpGXXSWiesMsVzYZ6dpym3tI6gRWtzv6XA+Ezd20i7ixIUa9twch3C/lN+ulO2pGXO/xzhV8z4wdrpFabvldVvexuxuOJMyaO8W4rxF7NblwlzfG2IVKIcV9Ta2hGXaO0TKpDLty87zTmfPrLq/fjd2naCgzQksbCzcQL3vaVW3yzKaeEKtiGOpawtrwvb1laptj1GUVDci9ssrWt56evOQU1/aWOhOfcRH5F638a9JlVKygaUcTfxPgX4W8zK9BS11BAPVPHQYh+IkmyUS618ZsWQHKxzBBPw+EfZ6ADZNe4tmLZ3y+Emm6WhslMomRDYFuVYi5tr8ZWrbnVssQ4kEKA4J/eFgfEHzkKbSykJa2Hq+Iyl+nVykbY0yVSG5yLHpnyII0sCDfTS82U0sT5yutSOKkVOTFxRbjH6TtlbpLwcYyzGZIHaRmR3wPVvpILEHO1++QP6/PKP0tr34H/AIgEwaLF2yBdpB1FoatfQwCXpIwYwA+duULFAC+uEUj6UfVoog5omMDFaKNISYjCENSBDQjUX0BlmmcpH0hOghGoFGflAQnqWlV65bsEeo5OZ8pEQT9afnArSL+H4fnK1XaBY5/lJamYtn9a90qUqNznwz45Sk20y1Pta995IKgGnfpfPkIbUuzs5yrXJxAeNx2HK8cmpvxubBVCAXBOXC2rawdv3kFsLG7Xtzyt8/QynsJuLnPM555XF5ZdOP4fjCT6q358YW21Sx7OGWfnFRW4sMjlr2G/4TVq0CRkBe3EShT2Rxwub524y9Z59DURg2NiLXGQkTPZ7k6FfSaS7GThLd5X85eCUkW5Glhc2PplJvWKnLOrbKT10c4s8w19dcxJdhbFjSqpzBKML9Ui2WKxIXLMZX5zSpVKZ0K8BbTXsIF/COEAvaTOlXkSXAGIljbItnkOA5ASRB4RqZ4SdbcoqqDpmEY+ISN3ESmdvyq4p3UGwZSSpIyHbyzEq7n3pib9oxythxMToeJ427dJoVaxAIte+nG54ZStubcdEqRWaorg2OEgrzAtY8COPOXJvOM+rnWtTadqshZbMcjfXLI3PZbOFslbpAWBt1rE5G1pUTc5DsC5NNLqMrXW4sLHTIDPt81vDbVpr0aCx4WHHt5k8pGL9f7TfpS8QPE2jmuACQy3IyAYXHhe5M5reKMtmLWfMsBfLMZE8W1vyt3yTcmwPtDkK4UJhYly1jnkMgc8j5S5zqL029n2hwxC2LPkoJsBYE5nzmxsuz4FAuWOZLHO5Jv7yn0mmtLACWpoQABiUD3Rpdkzt3xqdOm2hKHhYXHDu4xXmqnUVL9v9f5RS7+if/Yn9f8A4xRear1P7cQYkiiiIxjRooEsU8hK9TWKKIwc4B+fxiilQkNThLtBbLfs/GKKF/CivU0mU3vMf3h8BFFKhdNjd2jdhW3Z70uCKKOA66RjFFIpwyyhvBASB+6eJ7Ioo5+i/ipu5ev3fKbbRRQ6/T/0ko/hJDFFEZh9ekSRRQJGOfaZY2T3j4RRS+U9LO93IBsbZTndg/6rcVUFTyLXDEdpiikQ6sez2zrW2p1qXIGKwDMlrEfdIlvdQwmthy6/zjRTSfqP9NyjWa+pm/sNMVB1wGOeeh1+8M4oo+vw+WfVQBiO08TziiilE//Z"
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              src="https://s.abcnews.com/images/US/spacex-launch-rt-jef-230420_1682026636924_hpMain_4x3t_992.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
  

    <div className="APART_SEC">
        <h1 className="apart_Navbar">ORDER STARLINK</h1>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sAN6cVy-2kvzBvMx4cAD1cupcwdvVD8wrWkal43O2JVB07VaI-tNIHROyu5U2KvPKOI&usqp=CAU"
            alt=""
          />
          <div className='details'>
           
            <button>LEARN MORE</button>
          </div>
          <img
            src="https://www.dailybreeze.com/wp-content/uploads/2023/04/TDB-Z-SPACEX-0418-10.jpg?w=527"
            alt=""
          />
          <div className='details'>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div>
          <div className='details'>
        
            <button>LEARN MORE</button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtiuDpyCT88luEYj52oCsoFeJKjNXHP4OIgzm1jeN_NqthE0AZd9VWu6etVA-1d3tCgk&usqp=CAU"
            alt=""
          />
          <div className='details'>
            
            <button>LEARN MORE</button>
          </div>
          <img
            src="https://pbs.twimg.com/media/FxyXhOMaEAACyXj?format=jpg&name=4096x4096"
            alt=""
          />
        </div>
      </div>

    
      
      <div className="tags">
        <h2>Footer</h2>
        <div>
          <div>Contact</div>
          <div>About</div>
          <div>Careers</div>
        </div>
      </div>

	</div>
  )
}

export default Landing_page