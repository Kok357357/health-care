import React from 'react';
import { isEmpty } from 'lodash';
import defaultTheme from '../../../style/themes';
import { Standard } from '../../layouts';
import CarePlanHeader from '../../presentation/careplan/desktop/CarePlanHeader';
import MeetYourGoalsSection from '../../presentation/careplan/desktop/MeetYourGoalsSection';
import EducationAndResourcesSection from '../../presentation/careplan/desktop/EducationAndResourcesSection';
import RewardsSection from '../../presentation/careplan/desktop/RewardsSection';
import ActionButtonsContainer from '../../containers/shared/desktop/ActionButtonsContainer';
import withStoreData from '../../containers/base/withStoreData';
import actions from '@evry-member-app/shared/store/actions';
import selectors from '@evry-member-app/shared/store/selectors';
import { Helmet } from 'react-helmet-async';
import { Mobile } from '../../layouts';

const {
  fetchCarePlan,
  fetchWellnessGoals,
  fetchEducationalResources,
  fetchRewardBenefits,
  fetchRewardCategories
} = actions;
const {
  getCarePlan,
  getToken,
  getWellnessGoals,
  getEducationalResources,
  getRewardBenefits,
  getRewardCategories
} = selectors;

// DESKTOP: Care Plan View

const { LayoutWrapper } = defaultTheme.components;

const Plan = () => {
  const CarePlanHeaderWithData = withStoreData(
    CarePlanHeader,
    state => ({
      token: getToken(state),
      carePlan: getCarePlan(state)
    }),
    dispatch => ({
      fetchCarePlan: token => dispatch(fetchCarePlan(token))
    }),
    (stateProps, dispatchProps, ownProps) => ({
      fetch: () => {
        dispatchProps.fetchCarePlan(stateProps.token);
      },
      shouldFetch: isEmpty(stateProps.carePlan),
      carePlan: stateProps.carePlan,
      ...ownProps
    })
  );
  const MeetYourGoalsSectionWithData = withStoreData(
    MeetYourGoalsSection,
    state => ({
      token: getToken(state),
      wellnessGoals: getWellnessGoals(state)
    }),
    dispatch => ({
      fetchWellnessGoals: token => dispatch(fetchWellnessGoals(token))
    }),
    (stateProps, dispatchProps, ownProps) => ({
      fetch: () => {
        dispatchProps.fetchWellnessGoals(stateProps.token);
      },
      shouldFetch: isEmpty(stateProps.wellnessGoals),
      wellnessGoals: stateProps.wellnessGoals,
      ...ownProps
    })
  );
  const EducationAndResourcesSectionWithData = withStoreData(
    EducationAndResourcesSection,
    state => ({
      token: getToken(state),
      educationalResources: getEducationalResources(state)
    }),
    dispatch => ({
      fetchEducationalResources: token => dispatch(fetchEducationalResources(token))
    }),
    (stateProps, dispatchProps, ownProps) => ({
      fetch: () => {
        dispatchProps.fetchEducationalResources(stateProps.token);
      },
      shouldFetch: isEmpty(stateProps.educationalResources),
      educationalResources: stateProps.educationalResources,
      ...ownProps
    })
  );
  const RewardsSectionWithData = withStoreData(
    RewardsSection,
    state => ({
      token: getToken(state),
      rewardBenefits: getRewardBenefits(state),
      rewardCategories: getRewardCategories(state)
    }),
    dispatch => ({
      fetchRewardBenefits: token => dispatch(fetchRewardBenefits(token)),
      fetchRewardCategories: token => dispatch(fetchRewardCategories(token))
    }),
    (stateProps, dispatchProps, ownProps) => ({
      fetch: () => {
        dispatchProps.fetchRewardBenefits(stateProps.token);
        dispatchProps.fetchRewardCategories(stateProps.token);
      },
      shouldFetch: isEmpty(stateProps.rewardBenefits) || isEmpty(stateProps.fetchRewardCategories),
      rewardBenefits: stateProps.rewardBenefits,
      rewardCategories: stateProps.rewardCategories,
      ...ownProps
    })
  );
  return (
    <>
      <Helmet>
        <title>{reflection.layoutProps.title} - Evry Health</title>
      </Helmet>
      <LayoutWrapper>
        <ActionButtonsContainer view="plans" />
        <CarePlanHeaderWithData />
        <RewardsSectionWithData />
        <MeetYourGoalsSectionWithData />
        <EducationAndResourcesSectionWithData />
      </LayoutWrapper>
    </>
  );
};

const reflection = {
  component: Plan,
  //   layout: Standard,
  layout: Mobile,
  layoutProps: {
    title: 'My Plan'
  },
  route: '/plan',
  forAuthorized: true
};

export default Plan;

export { reflection };