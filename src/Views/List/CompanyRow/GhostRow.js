import React  from 'react'
import PropTypes from 'prop-types'

const GhostRow = ({ style, index }) => (
  <div className="st-panel-row _flat _ghost _no-gap _bordered" style={style}>
    <div className="st-panel-row__inner">
      <div className='st-prospect__left'>
      </div>
      <div className="st-prospect__col _index">
        { index + 1}
      </div>
      <div className="st-prospect__col">
        <div className='ghost ghost_logo'></div>
        <div className="ghost ghost_name"></div>
      </div>
      <div className="st-prospect__col">
        <div className="ghost ghost_row"></div>
      </div>
      <div className="st-prospect__col">
        <div className="ghost ghost_row"></div>
      </div>
      <div className="st-prospect__col">
        <div className="ghost ghost_row"></div>
      </div>
      <div className="st-prospect__col">
        <div className="ghost ghost_row"></div>
      </div>
      <div className="st-prospect__col">
        <div className="ghost ghost_row"></div>
      </div>
      <div className="st-panel-row__actions _no-round _popover">
        <div className="ghost ghost_row "></div>
      </div>
    </div>
  </div>
)

GhostRow.propTypes = {
  style: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default GhostRow
