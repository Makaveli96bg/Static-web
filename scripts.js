document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Apr 2022 - Present',
        title: 'AWS Cloud Operation Engineer at DXC Technology',
        description: 
        `• Management and Administration of AWS Services:\n` +
        `CLI, EC2, VPC, S3, ELB, Glacier, Route 53, CloudTrail, IAM, Lambda & etc.\n\n` +
        `• Initiating alarms in CloudWatch service for monitoring the server's performance, CPU Utilization, disk usage, etc.\n` +
        `• Configured AWS Multi Factor Authentication in IAM to implement 2-step authentication of user access using Google Authenticator and AWS Virtual MFA.\n` +
        `• Included security groups, network ACLs, Internet Gateways, and Elastic IP's to ensure a safe area for organization in AWS public cloud.\n` +
        `• Utilized AWS Config and CloudTrail as part of the governance framework to enable compliance, auditing, troubleshooting, etc., of AWS accounts and resources.\n` +
        `• Create and manage AWS infrastructures using Infrastructure as Code (IAC) tools like Terraform and CloudFormation.\n` +
        `• Create IAM user accounts and role-based policies for access to AWS services.\n` +
        `• Launch Amazon EC2 Instances using various images, including Linux and Windows AMIs.\n` +
        `• Install applications on AWS EC2 instances and configure the storage on S3 buckets.\n` +
        `• Provision AWS systems that are highly available using Autoscaling Group and Load Balancing.\n` +
        `• Create and manage lifecycle rules to transition objects from standard S3 to cheaper storage classes like Glacier and Deep Archive.\n` +
        `• Troubleshoot and resolve EC2 instance connectivity and availability issues.\n` +
        `• Knowledgeable in Virtual Private Network (VPN), Data Security, Backup & Recovery.\n` +
        `• Perform Monthly Patches on AWS servers.\n` +
        `• Evaluating system-based configuration and security vulnerability to ensure compliance with the organization's standards.\n` +
        `• Actively monitoring, researching, and analyzing ways in which the services in AWS can be improved.`
    },
    {
        date: 'Aug 2016 - Apr 2022',
        title: 'Network Support Engineer at DXC Technology',
        description: 
        `• Supporting, troubleshooting and maintaining customers' networks..\n` +
        `• Administering TCP/IP LAN's (VLAN routing, VTP, STP).\n` +
        `• Administering large-scale and complex WAN networks (OSPF, EIGRP,BGP, MPLS).\n` +
        `• Diagnosing complex network problems.\n` +
        `• Investigating incidents/problems accurately and effectively, defining action plans for detailed diagnosis and restoring normal operations of services.\n` +
        `• Change Management: Implement routine and emergency changes to Network Environment.\n` +
        `• Problem Management: Investigate root cause after incident resolution.\n` +
        `• Strictly follow ITSM/ITIL processes and procedures.\n` +
        `• Ensure customers' network continues to operate efficiently with minimum downtime.\n` +
        `• Adapts quickly to new technology & understands complex infrastructures.\n` +
        `• Supporting Riverbed, HP ProCurve, H3C, Cisco and F5 BIG-IP network equipment.\n`
    },
    {
        date: 'Oct 2012 - Aug 2016',
        title: 'Deputy Team Leader Field Support Team at Mobiltel EAD',
        description: 
        `• Evaluate team performance.\n` +
        `• Organize workflow and all related processes of employees field support team.\n` +
        `• Monitor and control the proper operation process work.\n` +
        `• Prepare a work schedule for employees in the Team.\n`
    },
    {
        date: 'Dec 2006- Sep 2012',
        title: 'Field Support Engineer at Megalan Network LTD',
        description: 
        `• Eliminating any issues regarding the proper work of the service on customer site.\n` +
        `• Еliminates network issues.\n` +
        `• Installation and support network equipment.\n` +
        `• Troubleshoots software and hardware problems related to LAN/WAN services.\n`
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
