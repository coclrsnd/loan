import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateComponent } from './commondata/date/date.component';
import { PlaceComponent } from './commondata/place/place.component';
import { HeaderComponent } from './header/header.component';
import { MembershipNumberComponent } from './commondata/membership-number/membership-number.component';
import { BorrowerNameComponent } from './borrower/borrower-name/borrower-name.component';
import { BorrowerParentnameComponent } from './borrower/borrower-parentname/borrower-parentname.component';
import { BorrowerAgeComponent } from './borrower/borrower-age/borrower-age.component';
import { OccupationComponent } from './commondata/occupation/occupation.component';
import { BorrowerAdharNumberComponent } from './borrower/borrower-adhar-number/borrower-adhar-number.component';
import { PancardNumberComponent } from './commondata/pancard-number/pancard-number.component';
import { NomineeComponent } from './borrower/nominee/nominee.component';
import { LoanPurposeComponent } from './commondata/loan-purpose/loan-purpose.component';
import { BorrowerAddressComponent } from './borrower/borrower-address/borrower-address.component';
import { BorrowerOfficeAddressComponent } from './borrower/borrower-office-address/borrower-office-address.component';
import { BorrowerMobileNumberComponent } from './borrower/borrower-mobile-number/borrower-mobile-number.component';
import { LoanAmountComponent } from './commondata/loan-amount/loan-amount.component';
import { InterestRateComponent } from './commondata/interest-rate/interest-rate.component';
import { AnnualincomeComponent } from './singleentry/annualincome/annualincome.component';
import { AnnualExpenditureComponent } from './singleentry/annual-expenditure/annual-expenditure.component';
import { ModeofEMIComponent } from './singleentry/modeof-emi/modeof-emi.component';
import { OverDueInterestrateComponent } from './commondata/over-due-interestrate/over-due-interestrate.component';
import { SecurityForLoanComponent } from './singleentry/security-for-loan/security-for-loan.component';
import { TaxDetailsComponent } from './singleentry/tax-details/tax-details.component';
import { LicDetailsComponent } from './singleentry/lic-details/lic-details.component';
import { OtherbankDetailsComponent } from './singleentry/otherbank-details/otherbank-details.component';
import { OtherLoanDetailsComponent } from './singleentry/other-loan-details/other-loan-details.component';
import { PendingLoansDetailsComponent } from './singleentry/pending-loans-details/pending-loans-details.component';
import { ShareAmountComponent } from './singleentry/share-amount/share-amount.component';
import { ControlledLoanComponent } from './singleentry/controlled-loan/controlled-loan.component';
import { GbComponent } from './singleentry/gb/gb.component';
import { FshNameComponent } from './first-surety-holder/fsh-name/fsh-name.component';
import { FshParentComponent } from './first-surety-holder/fsh-parent/fsh-parent.component';
import { FshAgeComponent } from './first-surety-holder/fsh-age/fsh-age.component';
import { FshRelationComponent } from './first-surety-holder/fsh-relation/fsh-relation.component';
import { FshAdharComponent } from './first-surety-holder/fsh-adhar/fsh-adhar.component';
import { FshMobileNumberComponent } from './first-surety-holder/fsh-mobile-number/fsh-mobile-number.component';
import { FshPlaceComponent } from './first-surety-holder/fsh-place/fsh-place.component';
import { FshAddressComponent } from './first-surety-holder/fsh-address/fsh-address.component';
import { FshOtherbankDetailsComponent } from './first-surety-holder/fsh-otherbank-details/fsh-otherbank-details.component';
import { SshNameComponent } from './second-surety-holder/ssh-name/ssh-name.component';
import { SshParentComponent } from './second-surety-holder/ssh-parent/ssh-parent.component';
import { SshAgeComponent } from './second-surety-holder/ssh-age/ssh-age.component';
import { SshRelationComponent } from './second-surety-holder/ssh-relation/ssh-relation.component';
import { SshAdharComponent } from './second-surety-holder/ssh-adhar/ssh-adhar.component';
import { SshMobileNumberComponent } from './second-surety-holder/ssh-mobile-number/ssh-mobile-number.component';
import { SshPlaceComponent } from './second-surety-holder/ssh-place/ssh-place.component';
import { SshAddressComponent } from './second-surety-holder/ssh-address/ssh-address.component';
import { SshOtherbankDetailsComponent } from './second-surety-holder/ssh-otherbank-details/ssh-otherbank-details.component';
import { CasteAndReligionComponent } from './commondata/caste-and-religion/caste-and-religion.component';
import { LoanAmountInLettersComponent } from './commondata/loan-amount-in-letters/loan-amount-in-letters.component';
import { CustomerNumberComponent } from './commondata/customer-number/customer-number.component';
import { LoanAccountNumberComponent } from './commondata/loan-account-number/loan-account-number.component';
import { SavingAccountNumberComponent } from './commondata/saving-account-number/saving-account-number.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BorrowerBloodgroupComponent } from './borrower/borrower-bloodgroup/borrower-bloodgroup.component';
import { FshRelationWithBorrowerComponent } from './first-surety-holder/fsh-relation-with-borrower/fsh-relation-with-borrower.component';
import { SshRelationWithBorrowerComponent } from './second-surety-holder/ssh-relation-with-borrower/ssh-relation-with-borrower.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateComponent,PlaceComponent, HeaderComponent,MembershipNumberComponent, CustomerNumberComponent, LoanAccountNumberComponent,
    SavingAccountNumberComponent,BorrowerNameComponent, BorrowerParentnameComponent, BorrowerAgeComponent, OccupationComponent, BorrowerAdharNumberComponent,
    PancardNumberComponent, NomineeComponent, LoanPurposeComponent, BorrowerAddressComponent, BorrowerOfficeAddressComponent,
    BorrowerMobileNumberComponent, LoanAmountComponent, LoanAmountInLettersComponent, InterestRateComponent, AnnualincomeComponent, AnnualExpenditureComponent,
    ModeofEMIComponent, OverDueInterestrateComponent, ModeofEMIComponent, SecurityForLoanComponent, TaxDetailsComponent,
    LicDetailsComponent, OtherbankDetailsComponent, OtherLoanDetailsComponent, CasteAndReligionComponent, PendingLoansDetailsComponent, ShareAmountComponent,
    ControlledLoanComponent, GbComponent, FshNameComponent, FshParentComponent, FshAgeComponent, FshRelationComponent, FshAdharComponent,
    FshMobileNumberComponent, FshPlaceComponent, FshAddressComponent, FshOtherbankDetailsComponent, 
    SshNameComponent, SshParentComponent, SshAgeComponent, SshRelationComponent, SshAdharComponent,
    SshMobileNumberComponent, SshPlaceComponent, SshAddressComponent, SshOtherbankDetailsComponent,
    BorrowerBloodgroupComponent, FshRelationWithBorrowerComponent, SshRelationWithBorrowerComponent, ReactiveFormsModule, FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'staticLoan';

  
}
