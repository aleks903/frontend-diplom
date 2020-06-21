import React from 'react';

export default function SeatsScheme(props) {
  const { arrSeats, schemeName } = props;

  return (
    <React.Fragment>
      <div className="seats-scheme standart">
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
      </div>
    </React.Fragment>
  )
}