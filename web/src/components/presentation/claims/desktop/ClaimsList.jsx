import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import Claim from './Claim';
import withStoreData from '../../../containers/base/withStoreData';
import actions from '@evry-member-app/shared/store/actions';
import selectors from '@evry-member-app/shared/store/selectors';

const { fetchClaimDetail, fetchEOB } = actions;
const { getToken, getClaimDetail, getEobFile } = selectors;

const ClaimWithData = withStoreData(
  Claim,
  (state, { claimNumber }) => ({
    token: getToken(state),
    eobFile: getEobFile(state),
    claimDetail: getClaimDetail(state, claimNumber)
  }),
  (dispatch, { claimNumber }) => ({
    fetchClaimDetail: token => dispatch(fetchClaimDetail(token, claimNumber)),
    fetchEOB: token => dispatch(fetchEOB(token, claimNumber))
  }),
  ({ token, ...stateProps }, { fetchClaimDetail, fetchEOB }, ownProps) => {
    const { claimNumber } = ownProps;
    return {
      fetch: {
        fetchEOB: () => fetchEOB(token, claimNumber),
        fetchClaimDetail: () => fetchClaimDetail(token)
      },
      shouldFetch: {
        fetchEOB: isEmpty(stateProps.claimDetail),
        fetchClaimDetail: isEmpty(stateProps.claimDetail)
      },
      ...stateProps,
      ...ownProps
    };
  }
);

// Claims List for "ClaimsHistorySection" on the "Claims" View

const ClaimsList = React.memo(({ claims }) => (
  <>
    {claims &&
      claims.map &&
      claims.map(
        ({
          claim_number: claimNumber,
          claim_status: claimStatus,
          dos,
          paid_on: paidOn,
          provider_name: providerName,
          provider_addresses: providerAddresses
        }) => {
          const dateOfService = new Date(dos);
          const [primaryProviderAddress] = providerAddresses;
          return (
            <ClaimWithData
              dateOfService={Moment(dateOfService).format('MM/DD/YYYY')}
              claimNumber={claimNumber}
              status={claimStatus}
              provider={{
                name: `${providerName.prefix || ''} ${providerName.first_name ||
                  ''} ${providerName.middle_name || ''} ${providerName.last_name || ''}`,
                practice: '',
                address: primaryProviderAddress
                  ? String(primaryProviderAddress)
                  : 'No address data found',
                phoneNumber: ''
              }}
            />
          );
        }
      )}
  </>
));

ClaimsList.propTypes = {
  claims: PropTypes.arrayOf(PropTypes.shape({}))
};

ClaimsList.defaultProps = {
  claims: []
};

export default ClaimsList;
