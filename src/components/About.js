import React, { Component  } from 'react';
import $ from 'jquery';
import Animation from '../animations/Animation';
let $centerCi,ciPos=0,ciFixTop=0;
class About extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        console.log('main','componentDidMount');
        Animation.hideLoad();

        $centerCi = $('#About .center_ci');
        ciPos = 166+75;
        ciFixTop = $('#About').innerHeight();

        window.addEventListener('scroll', this.handleScroll);

    };
    componentWillMount() {

    };
    componentWillUnmount() {
        console.log('main','componentWillUnmount');
        window.removeEventListener('scroll', this.handleScroll);
    };
    scrollPer(_min,_max,_st,_callback){
        let per = (_st-_min)/(_max-_min);
        per = (per < 0)?0:(per>1)?1:per;
        _callback(per);

    }
    parallaxPer(_min, _max,_st,_$scope,_callback){
        if(_$scope.length===0){return;}

        let maxscroll = document.body.clientHeight-window.innerHeight;

        _min=(_min>maxscroll-100?maxscroll-100:_min);

        let per = (_st-_min)/((_max>maxscroll?maxscroll:_max)-_min);
        per = (per < 0)?0:(per>1)?1:per;
        _callback(per);


    }

    handleScroll(event) {

        var st = $(window).scrollTop();

      
        if(st >= ciFixTop){
            if(!$centerCi.hasClass('over')){
                $centerCi.addClass('over');
            }
            
        }else{
            if($centerCi.hasClass('over')) {
                $centerCi.removeClass('over');
            }
        }
        var min0 = $('#About .company_start').eq(0).offset().top-ciPos-44;
        var min1 = $('#About .company_start').eq(1).offset().top-ciPos-44;
        var min2 = $('#About .company_start').eq(2).offset().top-ciPos-44;
        if(st >= min0 && st < min1){
            $('#About .center_ci>div').removeClass('active');
            $('#About .center_ci>div').eq(0).addClass('active');
        }else if(st >= min1 && st < min2){
            $('#About .center_ci>div').removeClass('active');
            $('#About .center_ci>div').eq(1).addClass('active');
        }else if(st >= min2){
            $('#About .center_ci>div').removeClass('active');
            $('#About .center_ci>div').eq(2).addClass('active');
        }
    };

    render() {
        return (
            <div className="container about" id="About">
                <div className="half_line"></div>
                
                <div className="about_list">
                    <ul>
                        <li className="left_box company_start">
                            <div className="year_box">
                                <span className="year">2012.04</span>
                                <div className="year_text">씨이랩 입사</div>
                            </div>
                           
                        </li>
                        <li className="left_box">
                            <div className="year_box">
                                <span className="year">2012.07</span>
                                <div className="year_text">스마일로(성남시 상권활성화 앱) 개발</div>
                            </div>                           
                        </li>
                        <li className="left_box">
                            <div className="year_box">
                                <span className="year">2013.10</span>
                                <div className="year_text">ibk푸딩 및 스마일로 관리자페이지 개발</div>
                            </div>                           
                        </li>
                        <li className="left_box">
                            <div className="year_box">
                                <span className="year">2014.01</span>
                                <div className="year_text">버즈비 data visualization 프론트엔드 개발</div>
                            </div>                           
                        </li>
                        <li className="left_box ">
                            <div className="year_box">
                                <span className="year">2014.04</span>
                                <div className="year_text">씨이랩 퇴사</div>
                            </div>
                        </li>
                        <li className="right_box company_start">
                            <div className="year_box">
                                <span className="year">2014.08</span>
                                <div className="year_text">더즈인터랙티브 입사</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2015.05</span>
                                <div className="year_text">한화 CYL(Color Your Life) 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2015.09</span>
                                <div className="year_text">주한화 계열사 사이트 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2016.04</span>
                                <div className="year_text">삼성 노트북9 메탈 웹 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2017.03</span>
                                <div className="year_text">한화 벚꽃 이벤트 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2017.08</span>
                                <div className="year_text">한화 토탈시이트 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2017.11</span>
                                <div className="year_text">CJ프레시웨이 사이트 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2018.02</span>
                                <div className="year_text">삼성 S9 체험존 모바일 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2018.06</span>
                                <div className="year_text">삼성 S9 모두의 사진전 프론트엔드 개발</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2018.08</span>
                                <div className="year_text">더즈인터랙티브 퇴사</div>
                            </div>
                        </li>
                        <li className="left_box company_start">
                            <div className="year_box">
                                <span className="year">2018.09</span>
                                <div className="year_text">디아이웨어 입사</div>
                            </div>
                        </li>
                        <li className="right_box">
                            <div className="year_box">
                                <span className="year">2018.09~</span>
                                <div className="year_text">푸드빌 운영</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="center_ci">
                    <div className="ci_xiilab mot2 active">
                        X<em>IIl</em>ab
                    </div>
                    <div className="ci_does mot2">
                        does
                    </div>
                    <div className="ci_diware mot2">
                        <em>DI</em>ware
                    </div>
                </div>
            
            </div>
        );
    }

}

export default About;