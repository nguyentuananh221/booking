import React, { useState } from 'react'
import { Button, Dropdown, message, Space, Switch, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import DownloadApp from './itemHeader/DownloadApp';
import ChanLang from './itemHeader/ChanLang';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../redux/configStore';
import { DisabledType } from 'antd/es/config-provider/DisabledContext';
import { likeAction } from '../redux/headerReducer/onClickReducer';
import { IoMdArrowDropdown } from 'react-icons/io'


type Props = {}

export default function HeaderFixed({ }: Props) {
     const dispatch: DispatchType = useDispatch()
     const { label } = useSelector((state: RootState) => state.click)

     const items: MenuProps['items'] = label;
     

     const handleMenuClick: MenuProps['onClick'] = (e: any) => {
          message.info('Click on menu item.');
          // console.log('click', e);
          // e.preventDefault()
     };

     const handleClick = (data: String) => {
          dispatch(likeAction(data))
     }

     const menuProps = {
          items,
          // onClick: handleMenuClick,
     };

     const onChangeSwitch = (checked: boolean) => {
          console.log(`switch to ${checked}`);
     };
     return (
          <div style={{position:'fixed', top:'0', left:'0', right:'0', zIndex:'999'}}>
               <div className='container-fluid header border-t-4 bg-white border-blue-500 font-medium'>
                    <div className='container headerTop bg-white'>
                         <div className='row items-center py-2.5 '>
                              <div className='col-2 flex items-center'>
                                   <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i className="fa fa-bars"></i></a>
                                   <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg' alt='logo' />
                              </div>
                              <div className='col-10 text-right flex justify-end gap-1 items-center'>
                                   <Dropdown trigger={['click']} menu={menuProps}>
                                        <Button onClick={() => { return handleClick('download') }} className='btn-custom'>
                                             <Space>
                                                  <i className="fa fa-file-download"></i>
                                                  Tải ứng dụng
                                                  <i className="fa fa-angle-down"></i>
                                             </Space>
                                        </Button>
                                   </Dropdown>

                                   <NavLink className='link-cus' to='/'>
                                        <i className="fa fa-handshake"></i>
                                        <span className='test'>Hợp tác với chúng tôi</span>
                                   </NavLink>

                                   <NavLink className='link-cus' to='/'>
                                        <i className="fa fa-calendar-check"></i>
                                        Đã lưu
                                   </NavLink>

                                   <NavLink className='link-cus' to='/'>
                                        <i className="fa fa-list-alt"></i>
                                        Đặt chỗ của tôi
                                   </NavLink>

                                   {/* <Dropdown trigger={['click']} menu={menuProps}>
                                   <Button onClick={()=>{return handleClick('language')}} className='btn-custom'>
                                        <Space>
                                             <i className="fa fa-globe"></i>
                                             VND
                                             <i className="fa fa-angle-down"></i>
                                        </Space>
                                   </Button>
                              </Dropdown> */}
                                   <Switch checkedChildren='VI' unCheckedChildren='EN' defaultChecked onChange={onChangeSwitch} />

                                   {/* <Dropdown  trigger={['click']} menu={menuProps}> */}
                                   <Button onClick={() => {
                                        // e.preventDefault();
                                        return handleClick('login')
                                   }} className='btn-custom'>
                                        <Space>
                                             <i className="fa fa-user"></i>
                                             Đăng nhập
                                             {/* <i className="fa fa-angle-down"></i> */}
                                        </Space>
                                   </Button>
                                   {/* </Dropdown> */}
                                   {/* <Dropdown trigger={['click']} menu={menuProps}> */}
                                   <Button type='primary' className=' font-medium bg-primary'>
                                        <Space>
                                             Đăng ký
                                        </Space>
                                   </Button>
                                   {/* </Dropdown> */}
                              </div>
                         </div>
                    </div>
                    <div className='shadow-md container-fluid headerBottom bg-gray-100 py-1.5'>
                         <div className='container flex gap-2'>
                              <Dropdown trigger={['click']} menu={menuProps}>
                                   <Button onClick={() => { return handleClick('transport') }} className='btn-custom'>
                                        <Space>
                                             Vận chuyển
                                             <IoMdArrowDropdown />
                                        </Space>
                                   </Button>
                              </Dropdown>

                              <Dropdown trigger={['click']} menu={menuProps}>
                                   <Button onClick={() => { return handleClick('place') }} className='btn-custom'>
                                        <Space>
                                             Chỗ ở
                                             <IoMdArrowDropdown />
                                        </Space>
                                   </Button>
                              </Dropdown>

                              <Dropdown trigger={['click']} menu={menuProps}>
                                   <Button onClick={() => { return handleClick('activity') }} className='btn-custom'>
                                        <Space>
                                             Hoạt động và giải trí
                                             <IoMdArrowDropdown />
                                        </Space>
                                   </Button>
                              </Dropdown>

                              <Dropdown trigger={['click']} menu={menuProps}>
                                   <Button onClick={() => { return handleClick('support') }} className='btn-custom'>
                                        <Space>
                                             Sản phẩm bổ sung
                                             <IoMdArrowDropdown />
                                        </Space>
                                   </Button>
                              </Dropdown>
                         </div>
                    </div>
               </div>
          </div>
     )
}


