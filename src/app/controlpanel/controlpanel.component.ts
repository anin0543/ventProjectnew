import {Component, Inject, OnInit, AfterViewInit} from '@angular/core';
import {faQrcode, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

import { CheckInService } from '../_services/check-in.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ShepherdService } from 'angular-shepherd';
import {QrComponent} from './qr/qr.component';


@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css',
  '../_styles/styles.css']
})
export class ControlpanelComponent implements OnInit {
    qrCode = faQrcode;
    question = faQuestionCircle;

  /** Properties */
  currentPosition = {
    currentZone: null,
    currentRoom: null
  };

  /** Constructor */
  constructor(
    public dialog: MatDialog,
    private shepherdService: ShepherdService) {}

    /* Dialog/Modal for QR Scanner */
    qrScanner(): void{

        const dialogRef = this.dialog.open(QrComponent, {
            width: '80%',
            height: 'fit-content',
            hasBackdrop: true,
            panelClass: ['dialogClass'],
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    /* Page tour! */
    ngAfterViewInit() {
        this.shepherdService.defaultStepOptions = {
            scrollTo: false,
            cancelIcon: {
                enabled: true
            }
        };
        this.shepherdService.modal = true;
        this.shepherdService.confirmCancel = false;
        this.shepherdService.addSteps([
            {
                id: 'intro',
                attachTo: {
                    element: '.first-element',
                    on: 'bottom'
                },
                buttons: [
                    {
                        classes: 'shepherd-button-primary',
                        text: 'Next',
                        type: 'next'
                    }
                ],
                cancelIcon: {
                    enabled: true
                },
                classes: 'tour custom-class-name-2',
                highlightClass: 'highlight',
                scrollTo: false,
                title: 'QR Scan',
                text: ['You can use your phones QR Scanner to automatically fill in Room and Zone!'],
                when: {
                    show: () => {
                        console.log('show step');
                    },
                    hide: () => {
                        console.log('hide step');
                    }
                }
            },
            {
                id: 'intro',
                attachTo: {
                    element: '.second-element',
                    on: 'top'
                },
                buttons: [
                    {
                        classes: 'shepherd-button-primary',
                        text: 'End Tour',
                        type: 'next'
                    }
                ],
                cancelIcon: {
                    enabled: true
                },
                classes: 'tour custom-class-name-2',
                highlightClass: 'highlight',
                scrollTo: false,
                title: 'Zone Select',
                text: ['You can select your room and zone manually'],
                when: {
                    show: () => {
                        console.log('show step');
                    },
                    hide: () => {
                        console.log('hide step');
                    }
                }
            }
        ]);
    }
    /* Method to start Tour, called from the question mark in HTML */
    tourStart(){
        this.shepherdService.start();
    }
  /** OnInit */
  ngOnInit(): void {
  }

}


/* Dialog component for the QR Scanner */
@Component({
    selector: 'app-dialog-qrscanner',
    templateUrl: './qr.dialog.component.html'
})

export class QrScannerDialogComponent {
  constructor(public dialogRef: MatDialogRef<ControlpanelComponent>){}

  onNoClick(): void{
    this.dialogRef.close();
  }

}
