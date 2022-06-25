import React from 'react';
import './Icon.scss';
import {
  Account,
  Add,
  AddOutline,
  ArrowDown,
  ArrowDropDown,
  ArrowDropUp,
  ArrowLeft,
  ArrowRight,
  Basket,
  BookmarkOff,
  BookmarkOn,
  Call,
  Card,
  Cart,
  Chart,
  Close,
  CloseOutline,
  Copy,
  Dashboard,
  Delete,
  Description,
  Done,
  Download,
  DragHandler,
  Edit,
  Error,
  ErrorOutline,
  Exit,
  ExpandLess,
  ExpandMore,
  Filter,
  Find,
  FirstPage,
  Gift,
  Help,
  HelpOutline,
  Hide,
  Home,
  Idea,
  Info,
  Label,
  LastPage,
  LikeFill,
  LikeOutline,
  Location,
  Mail,
  MailOutline,
  Menu,
  Money,
  MoreVert,
  Next,
  Person,
  Photo,
  Notification,
  QuestionAnswer,
  Receipt,
  Remove,
  RemoveOutline,
  Send,
  Setting,
  Share,
  Shipping,
  Show,
  StarFill,
  StarOutline,
  StarHalf,
  Store,
  ThumbDownFill,
  ThumbUpFill,
  Calendar,
} from './icons';
import ArrowUp from './icons/ArrowUp';
import InfoOutline from './icons/InfoOutline';
import Prev from './icons/Prev';
import Upload from './icons/Upload';
import { IconType } from './IconType';

type IconProps = {
  icon: IconType;
  color?: 'primary' | 'secondary' | 'danger' | 'black';
  size?: number;
};

function Icons(icon: IconType) {
  switch (icon) {
    case 'add':
      return <Add />;
    case 'account':
      return <Account />;
    case 'add-outline':
      return <AddOutline />;
    case 'arrow-down':
      return <ArrowDown />;
    case 'arrow-up':
      return <ArrowUp />;
    case 'arrow-drop-down':
      return <ArrowDropDown />;
    case 'arrow-drop-up':
      return <ArrowDropUp />;
    case 'arrow-left':
      return <ArrowLeft />;
    case 'arrow-right':
      return <ArrowRight />;
    case 'basket':
      return <Basket />;
    case 'bookmark-off':
      return <BookmarkOff />;
    case 'bookmark-on':
      return <BookmarkOn />;
    case 'calendar':
      return <Calendar />;
    case 'call':
      return <Call />;
    case 'card':
      return <Card />;
    case 'cart':
      return <Cart />;
    case 'chart':
      return <Chart />;
    case 'close':
      return <Close />;
    case 'close-outline':
      return <CloseOutline />;
    case 'copy':
      return <Copy />;
    case 'dashboard':
      return <Dashboard />;
    case 'delete':
      return <Delete />;
    case 'description':
      return <Description />;
    case 'done':
      return <Done />;
    case 'download':
      return <Download />;
    case 'drag-handler':
      return <DragHandler />;
    case 'edit':
      return <Edit />;
    case 'error':
      return <Error />;
    case 'error-outline':
      return <ErrorOutline />;
    case 'exit':
      return <Exit />;
    case 'expand-less':
      return <ExpandLess />;
    case 'expand-more':
      return <ExpandMore />;
    case 'filter':
      return <Filter />;
    case 'find':
      return <Find />;
    case 'first-page':
      return <FirstPage />;
    case 'gift':
      return <Gift />;
    case 'help':
      return <Help />;
    case 'help-outline':
      return <HelpOutline />;
    case 'hide':
      return <Hide />;
    case 'home':
      return <Home />;
    case 'idea':
      return <Idea />;
    case 'info':
      return <Info />;
    case 'info-outline':
      return <InfoOutline />;
    case 'label':
      return <Label />;
    case 'last-page':
      return <LastPage />;
    case 'like-fill':
      return <LikeFill />;
    case 'like-outline':
      return <LikeOutline />;
    case 'location':
      return <Location />;
    case 'mail':
      return <Mail />;
    case 'mail-outline':
      return <MailOutline />;
    case 'menu':
      return <Menu />;
    case 'money':
      return <Money />;
    case 'more-vert':
      return <MoreVert />;
    case 'next':
      return <Next />;
    case 'notification':
      return <Notification />;
    case 'person':
      return <Person />;
    case 'photo':
      return <Photo />;
    case 'prev':
      return <Prev />;
    case 'question-answer':
      return <QuestionAnswer />;
    case 'receipt':
      return <Receipt />;
    case 'remove':
      return <Remove />;
    case 'remove-outline':
      return <RemoveOutline />;
    case 'send':
      return <Send />;
    case 'setting':
      return <Setting />;
    case 'share':
      return <Share />;
    case 'shipping':
      return <Shipping />;
    case 'show':
      return <Show />;
    case 'star-fill':
      return <StarFill />;
    case 'star-outline':
      return <StarOutline />;
    case 'star-half':
      return <StarHalf />;
    case 'store':
      return <Store />;
    case 'thumb-down-fill':
      return <ThumbDownFill />;
    case 'thumb-up-fill':
      return <ThumbUpFill />;
    case 'upload':
      return <Upload />;
  }
}

function Icon({ icon, color, size = 24, ...props }: IconProps) {
  return (
    <i className="icon" data-color={color} style={{ fontSize: size }}>
      {Icons(icon)}
    </i>
  );
}

export default Icon;
