import React from "react";
import p from './Post.module.css'


const Post = (props) => {
    return (
        <div className={p.post}>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWERgSEhEYGRgZHRwZGBgYGBwaGhwcHBgcGhwfGRwcIy4lHh8rISAcJjgmKy8xNTU1HiQ7QDs0Py40NTEBDAwMEA8QHxISHjQsJSs0NDQ0NDYxNDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0PTQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIDBAj/xAA9EAACAQIDBQMJBwQCAwEAAAABAgADEQQSIQUxQVFhBiJxBxMVMlOBkZLRFEJygqGxwSNSYuHw8TNDsqL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAmEQEBAAIBBAICAgMBAAAAAAAAAQIRAxIhMUEUUQRxBTITYYEi/9oADAMBAAIRAxEAPwC5oiYgZiJiBmIiAiIgIiICImIGYiICIiAiIgImJmAiIgIiICJiIGYiYgZiIgIiICIiAiIgIiICIiAmJFu0XbnB4QlHfzlQaGnTszA8mN7L4E36SBbS8puKe3mxToIb2KjztQcrlu6PlnNykdTG1c0T53xfaXEVNXx2Jb8L+bX4JYfpNYm0KxbvVqp8Kj3/AHkdbv8AxX7fTcT5xpbfrJ/48ZilbgPPMV94Jm3wvlA2jRCs1ZaqncKiK3iCUytf3x1xF4qveJWmxPKqjkLicMyf50jnXqSpAYDwzSf7P2hSr0xVoVFdDuZTfUbweRHEHUTqWVxcbPL2xESUEREBERAREQEREBERAREQEREBERAREQPBtTadHD0zVr1VRRxY7zyA3k9BrKi7T+UWpiGNLDFqVDUFlNqrjqw9RTyBvzPCb/yv4HDiitdmIrswVBe4ZR61wdwUcRbUqDe4lWIoKWVRcC7MTw4BZXllfC7DGa2LRDAlQBrZUGpJ/wCcZxr4fLbMVJ5A3I8ZmhRdjddAOO4D3zgtAs2QHidx0+PKVrnNMQVFkVb/ANxGs60dgc17HfcTssQm5bE2v97TkeU4U1QAlg1z6trWPxhDsxIa4dwBfXS38ThUqK1iq5edjf8AeZd0VgG3Wscpvc23i8yrspLUw1hxsN3XhAMmUgq4PIqf+Wkl8nW1KmH2hTpliErN5uopvZswOQ2P3g1teRI4yMqAQxLWOhA566zlQrEupct3dxF8wI1BUrrcHW++TLqlm5p9PxKn7HeUN1y0toEshOVcQQAUPAVbb1/y3jjfUi17y6WVlyxuPlyiIkoIiICIiAiIgIiICIiAiIgIiIGJxdgASSABqSdAB1nKQnyqbYNDZ5pobPXPmxzCWu5+Hd/NIt0mTd0q7trthsZijXJ/p+rRXXSmp0YjgWPe94HCafuWBysQPXP8dJnOwp5ifW7mu+w5dOE3vZfs/wDaKrU2Y+aTKzsptqfuDmTz4Ac7Si33WrHH1Hg2Vs6piWbzdM5Rpcd2mpt94nja2gBPSdGNpuld8P3c6E07qCLlSRZRvOY8OOkunD4amiBKaKqIO4o0A6yL7K2CDjK2MdPVqP5oH7xLav4DUDrc8AZXM/K28fiRom7DVctKmF77KXquT3EJYd0AesQOA3m5uBaS7AdlcNTRQ9MVWUatUAb4L6o9wv1M3uoGvEThSB+8f9Ti5WrMcJO7z0qFLctBAPwKB+068RsfDOpD4emb7+4o/Uaz3313wx6bpzup1PpB9pdg6Lf1MI7Id5QtmUnf3Wa5U7t9x4b5BKxIrlXurBsraZWBBsbjgecvJbEHrylYdv8ABIuMzA2LUg55llLJr4hV+Etwyt7VVyYyd4idW+Y2a+p46HrLc8lPaFnQ4Gs12Rc9E3uTTvYqeqm1uht92VLWsHBS9tPjbr1m77MYvzGMw+ILG5dQbaCzNkqA/lYn3S7G6qjPHcfREREuZiIiAiIgIiICIiAiIgIiICIiBiU15YMQz41KdrrSpBvBqjtf9ESXLKW8q2Hf0ibeq9FG8crOpA5kWB984z8O+P8AshJUNmZdFWxtv6SzvJyi+j7qLF3ct4g5B+iiVgKFlHePeFwAN+uolo9iMKaWBDC9qjGoAx0VSAAfAhc35pnz8NnH5SXzYy5fdMNcAAD/AKkC2p2mxFeoUwKMyagsg7x5FnOiDiBoevCahez20GB84l78alRXb4lj+84mH3Vlz+ptbA3Thls2rcN0rnYfZWsmLpuxZERgzAuCWykEABDuvvvwlilVZgQdx/7E5ykniusbb5mmXQkgg2/YzkB0mn7T4etUw+XD1Mrq1wAxUNoQVYqet9dLgSvk7K4yqWerTKneL1Et77M2knHGXvtFys7aWsKeXT3yNdr9iriKfnkTNUpg2A3sm8r+Ialetxxkbw+wMdQOai7gW1CVRoeisQreBvJP2T269Vnw+KplK6DN6uXOl7ZgOYNr20N7jiBPTrvKjfVNWKtpIFqKz+owvrrob2Ok6qmcLdb6Hu+PTruki7Z7MWhin3hHAenyF2OdfcbnoGE8GwaPnsThsOBfNWW/4cwLfBQx90ul2oymn0jMzEzNDGREQEREBERAREQEREBERAREQMSE+Uns4cTQWtTBL0cxsN7IwGYAcSCFYdAwG+TaabE7SOcqugHHS5tvtfhOM8pJ3WceOWV7Pn/ZNJnxKUkIJdggYagBjYsPAXMuXFYBWoPQuQrLksDayZcpC8u7peQrYlJH2zVYKAKRrsAAAB38g3ce+3wk+LEsCPVI/wCplzy7xu48e1RzaGOo4VFphLW9SmlhcDeddAObHnxM0CdujmHnMPlG9Qr5mYH8oF+mkmuA7J4d674vFWrO3dRG9Smo0Vcn3m3sSdASbczU9bC0htRaeEDMn2hERHUk2FRVKsG1IvmHeF7b+MsnHNbvtVea7snpaWzcWlYLVptcXtY6MDxDDgfrNjSOpF+Pw1M6KnZmnQxJr4diivYVKJJZCR6rJxQjdb1SDwsJ3UXF3HL/AGZTnj03S/jz6sduVVABpz/iRLbfalKR83TUVHvkyh8oHQmxuRx5c5KK9JqtPIlQU2bTORfKDvYDiRwvpe15H+2HZrZ+E2Yy+abMxVUrnM9Q1NTd2G5bZiRovIXtO+PDc2r5eS42T212zu1uf+nVpebIsLh84Gg1YWBA6i8lVDDKzpUIuVuUbldcpAPI33eHKQfyXbFpYn7SMQmamAiq+oZWu5ujjVTl324EXk72Xss4dPMiqaiIbIx9YJvVWtpdfVuNCAN26M8Ombhx8ttuNR7t9svPhFcb6bix/wAXIUj5sh908Hkj2YWxT1GXu4cGxI/9jgqLHdome/4lks29S85hMRTG/I9vxZSV/W0j/koxjLhqtja9QG1gbnzaj+BJ48pjN1HNjbdT2tmJ58LXzLe1juI6z0TVLLNxhssuqzERJQREQEREBERAREQEREBERA4mQbamJsygLe979SL75OpFdrYb+oQFNxci3EHX4yjnnaVr/EykysQDsemXauIzbnFb3EVU0PxMsIAaCVtswtS253hZXZ115smb/wCrCWKinMTwNt/OZ8vTTj7/AG7AxBvcg8xPGNl0BiDihSQVj/7MoDXIsT+K2mbf1npdAdbkW3WMyrDUC37yJlZ7TcZfTDVgCbnXeSZ10SM3InX3TXYvbeGVxSqVkVybZSwvex9a3q/mtNolRSLkjpbiOEaqdx2X4TzVaFN6bUagzo3rI/eXQ33Hcb633gia7anaXD0GAqvkOoAALHxYJcgXns2btClXTPRqo/PIwJHiN498as7xHa9q78LhqdCl5qkgRBchUFtTvJ4sTzM7UJI3WvwnEXGrW/j9ZlHDDTnvi23ymYyTs6sa4WlUY7gjH4KTIN2BrE0GNrWawb8KL9ZJu1NUpg8QxawKMg8X7l/i00vYfDWw9l/8bO5LnjqEsPlkz+tRP7z9LG2HfK1zxFumk208GyqOWnpxJM982cc1jHnctlztjMRE7VkREBERAREQEREBERAREQMTx4zCB9Row3H+DPZEiyWaqZbLuKM8oKVMPtNKttbJVXXQsrFeH4Rfxlh4XGLWpLWpMCrjMOl94PIjcRwM0nllwF6VDEgeozU28HAYE9AUt+aVj9rqUagZHZc1mvTZqYbT/EzPnh6jXx8nurtLhULOwCgFidygAakk8AJXHaPtO1UtSw1QU6Vt63FRzroOIHQa8+Q1WN29ialL7NWrEqWBJIF8trgFhvF7HXkNZv8AYXZt6WH+1IGFVmDoL2YIBpu3MxObwyjnOMcZO9W9VyusURwuBxJNqWHqEb7lCq+9msDNpg9mbRRf6K1U0sQtRMpudbDPZfEC8m+zu3ZCEV6AcgkEKMr6c0YWJ8Ms2ydrcIym2FqA9aan9Q0tsn246cp5xv8AyqlGwMchzPhWYG5ObK1yd59bUzodHoFamWrSdfvZWQC/JrDpcS3h21wg7qUHJHNUUadcxP6TTV+0+IxTth6NMIh0ezZiQdO81hZegAJ3Xi690mGdvaWft5+y/a4VSuHxLDOQAj2AVz/aw3BuXA9Da8vDELci3hr8JW/bLYKYYpUw4tnUqygaZ1A7w/tJFz4jrNbU7Q4x0XzlVyTYKoYpcZd5CWzc7nnKrjMu8d9fT2qSeUnaoFBMMCM7EO67yqLqubldrEfhMmHY/YbLgcOtTu2VWKjfdu+R01Mp/ZezftNZKQBzVKio5ub2Zu/bwW7HjpPo9FAAAFgNBLcOOWd1HLy2XsyBbQTlES9lIiICIiAiIgIiICIiAiIgIiICIiBqe0uyhisHVwxtd17pO4OO8p9zAGfO2NolCAwbS4IberKbMp5EG4n09Kf8qfZvzdb7agPmqhtVAFwtQiwa3APoL/3dWnGc7bWceWrpXlU5luWu261uFuf6S6Oz2K89g6FQtqUAblmUZWv+YGUvhnUGzC4tY89eI6ySdl+1Rwy+aqIzU82YFSMyE+todGB32uLG/OZ85uNfHlq90527RpUwcRVU2XViq3YC9r6akC/WR043Z7EuMW4vbQq4/TJNztPtZgnwj2qh86OgTKwYllItYjQdTpKudkJy/wBq6ECxJ3gkSMcdzutvNlj4WBsj7JVrhaWd2JOoUqqixJJJC6cNL75LcJgRTPcUAbz49OvWVr2O29SoVXatdQyoiuqlgoUksCBrZrjcD6smGN7a4Oml6dQ1G4IqsLnqzCy/v0M5yxu9RP8AluU3a0PlHxJVqdMVLGzuVtvzEKLnhYK3xkLp5whqZrfdvx8F8J6doY9sTXevWbUjRRuAHqqv/OZ4zGy8O1Z1oU0z1HORFPqi+rMeQAuSeABMtxmppmyy3bU38j2yy9api3Hcp91ORqMO8R1VLD88uCavs9slMLhqeHp6hR3m4sx1Zj4m/hoOE2hl+M1GXK7u2YiJ05IiICIiAiIgIiICIiAiIgIiICIiAnRisMlSm1OogZGBVlOoIO8Gd8xAobtj2QbBuzIGeiRmV795Bc92p0/y/YyLpXBUoVvy4EH+RPoXbABqai9l/cmQfa/YfD1O/TJoude4Lp700t+UiZcspMrG3DC5YSxWb08gKsmv3SDp/sTAp2Iz3UHW9pJsZ2HxYFqbo6jdZsp+DCw+M1zdlsdu+zMSNNHQj/7k7n2dOU9NaqKO8GUgfdbQnTlOpmLt6uvAAW+AkgwnZbHAWOHRRzdk/hif0m7wPYR2YNiK6JYerRBv87Wt8pkXKT2TDK+kPfCPUdadNcznQIguQOp4b9Sd0uDyddlUwtNqr2au+jMNyroci9L7zxsOQnHZeyKOHQpRphSd7b2b8THU+G6SjYi2pW5E/sJPHlvLSObDpw37bOIiaWMiIgIiICIiAiIgIiICIiAiIgIicb84GYkW2z23wtAEK3nWHBD3Qer7vhc9JCtp9qsTiARnKA6CnSuL/ib1j8QOk6mNqrLlxx/2sPbHafD4e4d8zj7id5vfwX8xEg20+3NesCKRFFOBXvO35vu+4X6yMK482V3eA3+JnHO7kIBcAcrCdTGRny5sr4S7sbUZqdUOxZw+clr5iGUC5J1PqnWSKmSBr1kD2NtE0aoZ3uvqOu85TbvDnY/peT1GBAKsCp1FuvETDz4XHLf29f8AB5ZlxdPuMBwDYj/njMqBe40mSul4tpxlDcwTrrrBOugEM4EyDrcwlh33ASHdodoMmKLUarq6KikqSLixfXgfW3GSfaGLSjTaq53aAcWPACV9Wr5n84wzM12ffvJvpytNP42F3cnmfyPLJjMJ58pjs3t7UQAYhVqL/fTsre9ToT4ZZMtlbcoYgf0aqseKnRh4qdbdd0pR6RYEgHKDwO6cndkAGXW4II9YdVImy4x5uPPlPPdfsSqNi9sMVT7rMKyj7rmz2/xbf815Mtk9ssLWspfzbH7tSwBP+LeqfiD0nNxsX482OSTRMAzM5WkREBERAREQEREDE6q9ZEUs7BVGpLEADxJ3Tw7c2vTw1I1ap03Ko9Zm5D68JUu19uVsa+Z9FB7iA91RzF97f5H9BpOpNquTlmP7Travb2ihyYZfONuzG6oPedW9wt1kI2ztzEYg2q1rr/YndQdLfe/MTNTTo5Ws1yb2PPwE54mn/iVB0/4Z3MZGTLkyy81m6ZvVOXgL6k9YdmQsALX4Xv7rxTVQozK3TgLeMzV7t1sBextvI6EyXDjhg62BIu2t2tb3chDlluFYa8joZy9YlmcA+BmKYv3QtyeN90DFOnkAzi9xuJ18ek9+yNv1KJyZSyf2tw/C3Dw3TwC1jcm+4cveZyFmsO6thv3AznLGZTVd4Z5YZdWN1U1w3aGg++pkPFXFv/0NP1m0THUmGlZCOjqf5lavUdhl323aTrpVGAI0F9/H95RfxcfVbsf5LOT/ANSVZVTaFBfWr0x+db/C81WL7W0VutK9QjkCq+9iNfcJDnK5bC99+oHv1mHcEWCgc7Rj+NjPKM/5HkympJHq2niXr9+o6nkim2UcgP34zzoctshubai2nh1nEXUgleouNDOD4uzaWU7u6CJokkmow5ZXK7vlxLG9rac/9TktViMp3A6f6M5YdyWBU68z/uYrlrnui99RukuXN00AyEHmb6+4zqak6tZt3UftznZTbN/5Cfje0w9TgX0B0/1eBt9mbdr4YAU6pHEI3fQjll+77iJMNk9v6T2XEoabf3Ldk949ZfgfGVw9r929usw6KGuDfTfa3xkXGV3jyZY+KvjC4pKih6bq6ncykEfETvlK7I2m+GbNSqC51I1Ktb7rL+x3y0Oz+3qeKp5l7ri2dCdVP8qeB/Y6Ti46a+PlmXb23cTEzOVpERATz4vELTpvUc2VFLMbX0UXOnhPROJFxYwKU2/tRsU7VnOl8qJcWROA8TvJ4+AFtS1dLBbWbnc/tul8ejqPsafyL9Jn0fR9jT+RfpOupmvBbd2qIXDu3eQ6e7+ZyqBhox1txMvT0fR9jT+RfpHo+j7Gn8i/ST1I+PftQ9MuxCkX5WN/0ncrFNCAL8xeXn6Po+xT5F+kfYKXsU+VfpHUfHv2omsgA7rg9Rw8QZnIVUEsDfiCOPSXp6Po+xp/Iv0j0fR9inyL9I6j49+1GOiN3V9+YiKahWy2U8LX0+MvP0fR9inyL9I9H0fYp8i/SOo+PftRbOVJsbHof5mKJJI3A79SP3l6+j6PsafyL9I9H0fY0/kX6R1Hx79qMrklrORfd7vdMGgiglXW/LXWXp6Po+xT5F+kej6PsafyL9I6j49+1DI5PrC3vvO9QGAVV14nN8ZeXo+j7Gn8i/SPR9H2KfIv0jqPj37Uco3plBPA33HxmEIsxzC+osRf4S8vR9H2KfIv0j0fR9jT+RfpHUfHv2oj7SCMnI6G388pzKIVuW15Wv8ArL09H0fY0/kX6R6Po+xp/Iv0jqPj37UaB/TvlG/1r6zqrIwNrgHrr+0vf0fR9jT+RfpHo+j7FPkX6R1Hx79qMp0WK3AHxE9OC2o1CoteicrLvG9WGl1I4g/Q7xeXV6Po+xT5F+kej6PsafyL9I6ifj2e3VsfaK4igldAQHG47wQSrDrYgi8984U6YUAAAAbgBYDwE5zhpm9d2YiISREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z" alt="" />
            {props.massage}
            <div>
                <div className={p.like} >
                    <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695769.jpg" alt="" />
                    {props.like}

                </div>
            </div>
        </div >
    )
}

export default Post;