import Image from 'next/image';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { ClassroomInterface } from '../../../interfaces/modules/classroomInterface';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { ModulesInterface, SubModuleInterface } from '../../../interfaces/modules/ModulesInterface';
import { useDispatch, useSelector } from 'react-redux';
import { selectClassroomAction, selectSubModuleAction } from '../../../redux/actions/classroomControllerActions/ClassroomControllerAciton';
import { handleScreen } from '../../../redux/actions/genericActions';
import Router from 'next/router';
import { selectCurrSubModule } from '../../../redux/actions/classroomControllerActions/genericActions';
import { globalState } from '../../../interfaces/modules/globalStateInterface';

interface IClassCardProps {
  subModule: SubModuleInterface,
}

export default function ClassCard({ subModule }: IClassCardProps) {

  const dispatch = useDispatch();
  const { subModules: { subModules } } = useSelector((state: globalState) => state);

  const selectModule = (moduleInfo: ModulesInterface) => {
    dispatch(selectSubModuleAction(moduleInfo));
    dispatch(handleScreen('Classroom'));
    Router.push('/Classroom');
  };


  const selectClass = (classInfos: ClassroomInterface) => {
    dispatch(selectClassroomAction(classInfos));
  };

  const selectSubModule = (classInfos: ClassroomInterface) => {
    const findCurrModule = subModules.find((currModule: ModulesInterface) => currModule.id === subModule.id);
    selectModule(findCurrModule);
    dispatch(selectCurrSubModule({ name: subModule.name, id: subModule.id }));
    selectClass(classInfos);
  };



  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      pagination={{
        clickable: true
      }}
      //   autoplay={{
      //     delay: 6000,
      //     disableOnInteraction: false
      // }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles.mySwiper}
    >
      {subModule.classrooms.map((currClassroom: ClassroomInterface, index: number) => (
        <SwiperSlide
          key={index} className="">
          <section onClick={() => selectSubModule(currClassroom)} className={styles.class_card_container}>
            <section className={styles.player_area}>
              <FaPlayCircle/>
            </section>
            <section className={styles.image_area}>
              <Image
                style={{objectFit: 'cover',  filter: 'brightness(80%)'}}
                width={400} height={250} src={currClassroom.image} alt={currClassroom.name} />
            </section>
            <article>
              <h2>{currClassroom.name}</h2>
              <p>{subModule.name}</p>
            </article>
            <section>
            </section>
            <button type='button'>
              <span>
                Continuar assistindo
              </span>
            </button>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
