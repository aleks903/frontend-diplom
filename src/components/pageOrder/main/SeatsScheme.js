import React from 'react';

export default function SeatsScheme(props) {
  const { nameWagon, arrSeats, schemeName } = props;


  // const schemSeats = {
  //   seatTop: [], - записываются также 1 и 4 класса
  //   amountSeatTop: 0, - записываются также 1 и 4 класса
  //   seatBottom: [],
  //   amountSeatBottom: 0,
  //   seatSide: [],
  //   amountSeatSide: 0,
  // };

  return (
    <React.Fragment>
      <div className="seats-scheme standart">
        {/* <span className="scheme_wagon-number">{nameWagon}</span> */}
        <span className="scheme_wagon-number">{nameWagon.replace(/[^0-9]+/,'')}</span>
        <ul className="scheme_top-seats">
          <li className="place_is_taken">2</li>
          <li className="place_is_taken">4</li>
          <li className="place_is_taken">6</li>
          <li className="place_is_taken">8</li>
          <li className="place_is_taken">10</li>
          <li className="place_is_taken">12</li>
          <li className="place_is_taken">14</li>
          <li className="place_is_taken">16</li>
          <li className="available-place">18</li>
          <li className="place_is_taken">20</li>
          <li className="place_is_taken">22</li>
          <li className="place_is_taken">24</li>
          <li className="place_is_taken">26</li>
          <li className="place_is_taken">28</li>
          <li className="available-place">30</li>
          <li className="available-place">32</li>
        </ul>
        <ul className="scheme_bottom-seats">
          <li className="available-place">1</li>
          <li className="available-place">3</li>
          <li className="place_is_taken">5</li>
          <li className="place_is_taken">7</li>
          <li className="place_is_taken">9</li>
          <li className="available-place">11</li>
          <li className="available-place">13</li>
          <li className="available-place">15</li>
          <li className="place_is_taken">17</li>
          <li className="available-place">19</li>
          <li className="place_is_taken">21</li>
          <li className="place_is_taken">23</li>
          <li className="place_is_taken">25</li>
          <li className="available-place">27</li>
          <li className="place_is_taken">29</li>
          <li className="available-place">31</li>
        </ul>
      </div>


{/* Схема плацкартного вагона */}

      <div className="seats-scheme standart platzKarte-wagon">
        <span className="scheme_wagon-number">07</span>
        <ul className="scheme_top-seats">
          <li className="place_is_taken">2</li>
          <li className="place_is_taken">4</li>
          <li className="place_is_taken">6</li>
          <li className="place_is_taken">8</li>
          <li className="place_is_taken">10</li>
          <li className="place_is_taken">12</li>
          <li className="place_is_taken">14</li>
          <li className="place_is_taken">16</li>
          <li className="available-place">18</li>
          <li className="place_is_taken">20</li>
          <li className="place_is_taken">22</li>
          <li className="place_is_taken">24</li>
          <li className="place_is_taken">26</li>
          <li className="place_is_taken">28</li>
          <li className="available-place">30</li>
          <li className="available-place">32</li>
        </ul>
        <ul className="scheme_bottom-seats">
          <li className="available-place">1</li>
          <li className="available-place">3</li>
          <li className="place_is_taken">5</li>
          <li className="place_is_taken">7</li>
          <li className="place_is_taken">9</li>
          <li className="available-place">11</li>
          <li className="available-place">13</li>
          <li className="available-place">15</li>
          <li className="place_is_taken">17</li>
          <li className="available-place">19</li>
          <li className="place_is_taken">21</li>
          <li className="place_is_taken">23</li>
          <li className="place_is_taken">25</li>
          <li className="available-place">27</li>
          <li className="place_is_taken">29</li>
          <li className="available-place">31</li>
        </ul>
      
        <ul className='scheme_side-seats'>
          <li className="available-place">33</li>
          <li className="place_is_taken">34</li>
          <li className="place_is_taken">35</li>
          <li className="place_is_taken">36</li>
          <li className="available-place">37</li>
          <li className="place_is_taken">38</li>
          <li className="available-place">39</li>
          <li className="place_is_taken">40</li>
          <li className="available-place">41</li>
          <li className="place_is_taken">42</li>
          <li className="place_is_taken">43</li>
          <li className="place_is_taken">44</li>
          <li className="available-place">45</li>
          <li className="available-place">46</li>
          <li className="available-place">47</li>
          <li className="place_is_taken">48</li>
        </ul>
      </div>

                
    {/* Люкс-вагон */}

      <div className="seats-scheme standart luxury-wagon">
        <span className="scheme_wagon-number">07</span>
        <ul className="scheme_bottom-seats">
          <li className="available-place">1</li>
          <li className="available-place">2</li>
          <li className="place_is_taken">3</li>
          <li className="place_is_taken">4</li>
          <li className="place_is_taken">5</li>
          <li className="available-place">6</li>
          <li className="available-place">7</li>
          <li className="available-place">8</li>
          <li className="available-place">9</li>
          <li className="available-place">10</li>
          <li className="place_is_taken">11</li>
          <li className="place_is_taken">12</li>
          <li className="place_is_taken">13</li>
          <li className="available-place">14</li>
          <li className="available-place">15</li>
          <li className="available-place">16</li>
        </ul>
      </div>

            
    {/* Сидячие места */}

      <div className="seats-scheme seat-type">
        <span className="scheme_wagon-number">07</span>
        <ul className="scheme_first_lane-seats">
          <li className="available-place">2</li>
          <li className="available-place">4</li>
          <li className="place_is_taken">6</li>
          <li className="place_is_taken">8</li>
          <li className="place_is_taken">10</li>
          <li className="available-place">12</li>
          <li className="available-place">14</li>
          <li className="available-place">16</li>
          <li className="available-place">18</li>
          <li className="available-place">20</li>
          <li className="place_is_taken">22</li>
          <li className="place_is_taken">24</li>
          <li className="place_is_taken">26</li>
          <li className="available-place">28</li>
          <li className="available-place">30</li>
          <li className="available-place">32</li>
        </ul>
        <ul className="scheme_second_lane-seats">
          <li className="available-place">1</li>
          <li className="available-place">3</li>
          <li className="place_is_taken">5</li>
          <li className="place_is_taken">7</li>
          <li className="place_is_taken">9</li>
          <li className="available-place">11</li>
          <li className="available-place">13</li>
          <li className="available-place">15</li>
          <li className="available-place">17</li>
          <li className="available-place">19</li>
          <li className="place_is_taken">21</li>
          <li className="place_is_taken">23</li>
          <li className="place_is_taken">25</li>
          <li className="available-place">27</li>
          <li className="available-place">29</li>
          <li className="available-place">31</li>
        </ul>
        <ul className="scheme_third_lane-seats">
          <li></li>
          <li className="available-place">34</li>
          <li className="available-place">36</li>
          <li className="place_is_taken">38</li>
          <li className="place_is_taken">40</li>
          <li className="place_is_taken">42</li>
          <li className="available-place">44</li>
          <li className="available-place">46</li>
          <li className="available-place">48</li>
          <li className="available-place">50</li>
          <li className="available-place">52</li>
          <li className="place_is_taken">54</li>
          <li className="place_is_taken">56</li>
          <li className="place_is_taken">58</li>
          <li className="available-place">60</li>
          <li></li>
        </ul>
        <ul className="scheme_fourth_lane-seats">
          <li className="available-place">33</li>
          <li className="available-place">35</li>
          <li className="place_is_taken">37</li>
          <li className="place_is_taken">39</li>
          <li className="place_is_taken">41</li>
          <li className="available-place">43</li>
          <li className="available-place">45</li>
          <li className="available-place">47</li>
          <li className="available-place">49</li>
          <li className="available-place">51</li>
          <li className="place_is_taken">53</li>
          <li className="place_is_taken">55</li>
          <li className="place_is_taken">57</li>
          <li className="available-place">59</li>
          <li className="available-place">61</li>
          <li className="available-place">62</li>
        </ul>
      </div>
    </React.Fragment>
  )
}