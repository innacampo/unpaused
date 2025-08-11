import React, { useState} from 'react';
import { Book, CheckCircle, MessageSquare } from 'lucide-react';
import { marked } from 'marked';

// A placeholder for the original content. In a real app, this would be fetched or imported.
// The content is a long string of markdown text from the user-provided artifact.
const educationalContent = `
# Sexual Health and Well-being Across the Menopausal Transition: A Comprehensive Review of Peer-Reviewed Scientific Literature

## 1. Introduction: Defining the Menopausal Transition and its Impact on Sexual Health

The menopausal transition represents a significant physiological and psychological shift in a woman's life. This natural biological phase signals the cessation of reproductive years, retrospectively diagnosed after 12 consecutive months without menstruation.[1] In the United States, the average age for menopause is 51 years, typically occurring between 49 and 52, though menopause before 40 is considered premature. The transition, known as perimenopause, is characterized by profound reproductive and hormonal changes, including a decline in estrogen and progesterone levels.[1, 2] Perimenopause itself has two stages: an early transition with mostly regular cycles and a late transition marked by amenorrhea lasting at least 60 days.[2] Following menopause, women spend approximately one-third of their lives in the postmenopausal stage, a period defined by primary ovarian failure and estrogen deficiency.[3]

Sexual activity is a fundamental aspect of a woman's quality of life throughout the menopausal transition and beyond.[1] Sexual function is a complex interplay of organic, psychological, and interpersonal factors, and its assessment serves as a crucial measure of overall sexual well-being.[4] However, the menopausal transition frequently brings a range of sexual complaints, including painful intercourse (dyspareunia), a diminished interest in sex (low libido), and difficulties with arousal or achieving orgasm.[5] These issues are not merely physical; they can significantly erode a woman's self-esteem and self-confidence, profoundly impacting her overall sexual health.[5] Furthermore, sexual dysfunction is widely recognized as being associated with impaired general well-being and a reduced quality of life.[6, 7, 8, 9, 10]

Understanding women's intimate and sexual experiences during midlife necessitates a comprehensive biopsychosocial approach.[1] This framework acknowledges that biological changes alone are insufficient to fully explain these experiences.[1] Instead, it integrates biological dimensions, such as hormonal fluctuations and the natural aging process, with psychological factors like stress, fatigue, self-perception, and body image.[1, 11] Additionally, social dimensions, including relational dynamics, cultural influences, and broader lifestyle transitions (e.g., increased job demands, family responsibilities), play a significant role in shaping a woman's perceptions and experiences of sexuality.[1]

The menopausal transition represents a critical period for holistic health intervention. The profound hormonal, physical, and psychological changes associated with this transition are well-documented to negatively affect a woman's quality of life and diminish her self-esteem, self-confidence, and sexual health.[1, 2, 5, 7, 12] The necessity of a biopsychosocial approach underscores that medical interventions in isolation are often insufficient. This period, therefore, presents a vital opportunity for comprehensive, multi-disciplinary healthcare strategies that extend beyond symptom management to address psychological well-being, social support networks, and relationship dynamics. Proactive engagement and education during this time can potentially mitigate long-term adverse impacts on both quality of life and sexual health.

Furthermore, the relationship between menopausal symptoms and sexual dysfunction is intricately interconnected. While the decline in estrogen is a primary driver for many menopausal symptoms, such as hot flashes and vaginal dryness [5, 12, 13, 14, 15], the direct correlation between hormonal changes and the etiology of sexual dysfunction is not as straightforward as with other symptoms.[12] Instead, a reduction in libido, for instance, can be attributed to the compounding effects of vasomotor symptoms, sleep disturbances, and shifts in mood.[12] This suggests a cascading effect where initial hormonal changes lead to primary symptoms (e.g., hot flashes, sleep problems), which in turn contribute to psychological distress (e.g., depression, anxiety). It is these secondary symptoms, rather than solely the direct hormonal impact, that appear to significantly impair sexual function. Consequently, addressing and managing associated symptoms like sleep disturbances and mood changes is as crucial as, if not more important than, solely focusing on hormonal levels to improve sexual health outcomes.

## 2. Physiological Changes Affecting Sexual Health

The physiological landscape of a woman's body undergoes significant transformations during perimenopause and menopause, largely driven by fluctuating and declining hormone levels. A primary factor is the reduction in estrogen, which is a key contributor to alterations in sexual health.[13, 15] This decrease can directly lead to vaginal dryness and thinning of vaginal tissues, making sexual activity uncomfortable and often painful.[13, 15] Estrogen plays a vital role in maintaining sexual desire and the elasticity of pelvic tissues by increasing genital blood flow and vaginal lubrication.[3, 4] Consequently, hypoestrogenism, or low estrogen levels, can reduce sexual responsiveness by affecting both the central nervous system and peripheral tissues.[4] While estrogen levels decline, androgen production continues in the remaining ovarian theca cells and adrenal glands, with peripheral aromatization converting these androgens into estrogen.[12]

A significant and often persistent physiological challenge is the Genitourinary Syndrome of Menopause (GSM), also known as Vulvovaginal Atrophy (VVA). Urogenital tissues are highly sensitive to estrogen, and its deficiency leads to atrophy and shortening of the vagina, potentially contributing to uterine prolapse and dyspareunia.[12] Vaginal dryness, irritation, and pain during intercourse are common, affecting approximately 50% of women after menopause.[13] The prevalence of symptomatic VVA is consistently reported around 50%, with specific symptoms like vaginal dryness affecting 83% and pain during intercourse affecting 42% of women.[8] Unlike vasomotor symptoms (e.g., hot flashes), vulvovaginal atrophy typically does not improve spontaneously over time without specific treatment.[12] Furthermore, reduced estrogen levels can also impact the urinary tract, including the bladder and urethra, leading to symptoms such as urinary incontinence.[12]

The decline in estrogen also profoundly impacts various phases of the sexual response cycle, including desire, arousal, and orgasm. The typical level of sexual desire can significantly decrease [13], with low sexual desire being a common concern reported during the menopausal transition.[1] Manifestations of low libido include a lack of motivation for sexual activity, reduced or absent desire for fantasies and sexual stimulation, an inability to sustain desire during sexual activity, and avoidance of situations that could lead to sexual engagement.[13] As women age, the physiological process of sexual arousal changes; blood flow to the genitals becomes slower, which can result in reduced sensitivity during sexual activity.[15] Difficulties in achieving orgasm are also frequently reported.[1] Research indicates that reduced oestradiol levels and elevated follicle-stimulating hormone (FSH), which are markers of menopause, are associated with an increased prevalence and severity of both vasomotor and sexual symptoms, independent of a woman's chronological age.[16]

The persistent and progressive nature of Genitourinary Syndrome of Menopause (GSM)/Vulvovaginal Atrophy (VVA) is a crucial aspect of menopausal sexual health. While many menopausal symptoms, such as hot flashes, may fluctuate or even decrease in severity over time, GSM/VVA is explicitly noted as a chronic, progressive condition that does not spontaneously improve without treatment.[12] This highlights that early and continuous intervention for vaginal dryness and dyspareunia is not just about immediate comfort but is essential for maintaining long-term sexual function and quality of life. The implication is that healthcare providers should proactively screen for and discuss these symptoms, even if women do not initially report them, given their high prevalence and unremitting nature.

Beyond the direct effects of estrogen, the etiology of sexual dysfunction is multifactorial. While estrogen decline is a significant contributor to physiological changes like vaginal dryness [13, 15], the evidence suggests that the cause of sexual dysfunction does not correlate with hormonal changes in the same direct manner as other menopausal symptoms.[12] Instead, a decreased libido can be attributed to a complex interplay of factors, including vasomotor symptoms (e.g., hot flashes), sleep disturbances, and mood changes.[12] This suggests that sexual dysfunction is not merely a direct consequence of estrogen deficiency but rather stems from a complex interaction where initial hormonal shifts lead to secondary symptoms (such as hot flashes and sleep problems), which then contribute to psychological distress, ultimately impacting sexual desire and function. Therefore, a comprehensive approach to managing sexual dysfunction must extend beyond hormone replacement therapy to include effective management of hot flashes, promotion of healthy sleep hygiene, and provision of psychological support.

## 3. Psychological Dimensions of Sexual Health During Menopause

The menopausal transition significantly influences a woman's psychological well-being, which in turn has a profound impact on her sexual health. Low levels of estrogen and progesterone can directly affect mood and sexual desire.[14] There is a clear interrelationship, as depressed women often experience more severe hot flashes and worse sleep quality.[2] Moreover, a depressed mood is a statistically significant factor associated with a greater likelihood of sexual dysfunction, with an adjusted odds ratio (ORad) of 2.03 (95% CI 1.32–3.10).[4]

Research indicates that early perimenopausal women experience the highest levels of perceived stress and report being more severely bothered by feelings of depression and anxiety, leading to the poorest overall self-reported psychosocial quality of life.[16] In contrast, postmenopausal women report similar experiences regarding stress and anxiety as premenopausal women, suggesting a potential adaptation or resolution of these acute psychological challenges over time.[16] Nevertheless, over half of British women report struggling with anxiety and depression during the menopausal transition.[16] Menopause increases vulnerability to depression and anxiety, a phenomenon potentially mediated by estrogen fluctuations affecting neurotransmitters like serotonin and GABA.[11] The risk for developing a major depressive episode is threefold higher during perimenopause, leading some researchers to propose the concept of 'perimenopausal depression' as a distinct subtype of depressive disorders.[16] Stress itself is a well-documented factor that can worsen menopausal symptoms, including vasomotor symptoms; one study found that women who reported being upset by a stressful event experienced 21% more vasomotor symptoms.[11]

Physical changes associated with menopause, such as weight gain, wrinkles, and altered breast shapes, can lead to concerns about beauty and attractiveness, contributing to a diminished sexual desire. Psychological effects that further reduce sexual satisfaction include feelings of regret about diminished sexual desire, experiences of depression and embarrassment, a lack of self-confidence dueol to physical changes, and an unfavorable body image. Conversely, women who possess a positive body image, have adequate information about menopause, and accept the menopausal process tend to report higher levels of sexual satisfaction.

The emotional responses to these sexual changes are varied and often distressing. Many women report experiencing emotions such as depression, frustration, upset, and distress due to a decline in sexual activities. Some express concern about their partner's unmet sexual needs. Feelings of guilt and obligation can also lead some women to engage in sexual activities primarily to satisfy their partners, rather than for their own desire or pleasure. Beyond menopausal symptoms, broader lifestyle factors such as chronic stress, anxiety, past trauma, poor diet, lack of exercise, and sleep problems can also contribute significantly to a low sex drive.[13]

The perimenopausal period appears to be a phase of heightened psychological distress, which has important implications for early intervention. Research consistently indicates that early perimenopausal women experience the highest levels of stress and report being more severely affected by feelings of depression and anxiety.[16] This finding is critical because it suggests that psychological symptoms do not necessarily increase linearly throughout the entire menopausal transition but rather may peak during this initial phase. This underscores the need for healthcare providers to be particularly vigilant in screening for and addressing psychological distress during perimenopause, as this stage represents a period of increased vulnerability. Early and effective intervention during perimenopause could potentially mitigate the long-term impact on sexual health and overall quality of life, given that untreated psychological issues can cascade into significant sexual dysfunction.[4]

Furthermore, there is a clear reciprocal relationship between psychological well-being and sexual health during the menopausal transition. While declining estrogen levels can directly influence mood [14], the evidence also shows that women experiencing depression tend to have more severe hot flashes and poorer sleep.[2] A depressed mood is also a significant predictor of sexual dysfunction.[4] This creates a self-reinforcing cycle: hormonal changes contribute to mood disturbances, which then exacerbate physical symptoms, and both physical and psychological distress collectively impair sexual desire and function. Moreover, the distress arising from sexual problems can itself lead to further negative emotions. This complex interplay necessitates that interventions aimed at improving sexual health must concurrently address mental health concerns, and vice-versa. Therapies that focus on enhancing resilience and self-efficacy have been shown to be beneficial for psychological complaints irrespective of the specific menopausal stage.[16] This highlights the value of a broader, non-pharmacological approach that supports women's mental and sexual health simultaneously.

## 4. Social and Relational Factors Influencing Sexual Life

Sexual health during the menopausal transition is not solely an individual experience; it is profoundly shaped by social and relational dynamics, particularly those involving a woman's partner. A woman's sexual interest and activity are often significantly influenced by her male partner's sexual difficulties, such as erectile dysfunction (ED).[17] Evidence strongly suggests that male erectile function and female sexual function are interdependent within the context of a couple.[17] Female sexual dysfunction can even arise or be exacerbated when women perceive ED in their partners.[17] The menopausal transition can be challenging not only for women but also for their spouses, as a woman's low sex drive can affect intimacy and the overall relationship dynamic.[17]

The severity of menopausal symptoms has a direct impact on marital adjustment and relationship satisfaction. As the severity of menopausal symptoms increases, marital adjustment tends to decrease.[6] Menopause-related complaints directly affect the quality of a woman's sexual life and, consequently, her marital adjustment.[6] Open communication between partners about changing sexuality and expectations is crucial for navigating these challenges.[15] Recent research underscores that the communication behaviors between husbands and wives are interrelated.[17] A positive attitude from men regarding the changes their partners experience during menopause can foster increased emotional support, which in turn can significantly improve the quality of sexual relations within the couple.

Cultural perceptions and societal expectations also play a substantial role in how women perceive and experience changes in their sexual behavior over time.[1] In many non-Western cultures, menopause is often viewed as the end of a woman's sexual identity, with sexual activity closely linked to reproduction. Some cultures may consider the cessation of sexual activity as normative or appropriate, while others maintain expectations for women to continue sexual activity. Cultural norms, particularly in regions like India, can hinder open discussions about menopausal issues with male family members, adding to a woman's psychological burden.[18] In some cultures, such as Iranian and Lebanese, women may even undergo cosmetic surgery to appear younger, reflecting societal pressures related to appearance and sexuality.

The significance of social support, while complex, is also evident. High levels of social support have been associated with a significantly lower likelihood of women experiencing moderate-to-severe menopausal symptoms.[11] While stress is known to increase the frequency of vasomotor symptoms, one study did not find strong evidence that emotional support directly lowered VMS frequency or buffered against the effects of stress.[11] However, the degree to which a woman was personally upset by a life stressor had the largest effect on her menopausal symptoms, suggesting the subjective experience of stress is highly impactful.[11]

The interdependence of male and female sexual function within a couple underscores that the couple, rather than just the individual woman, should be considered the unit of care for menopausal sexual health. Research consistently highlights that a woman's sexual desire and activity can be directly influenced by her partner's sexual difficulties, such as erectile dysfunction. Conversely, female sexual problems can significantly impact a spouse's sexual function and the overall intimacy of the relationship.[17] This implies that a purely individualistic approach to addressing female sexual dysfunction during menopause is often insufficient. Healthcare providers should therefore consider the couple's dynamic, encourage open communication between partners, and potentially involve both individuals in counseling or treatment to achieve optimal outcomes for both the woman and her relationship. This perspective shifts the paradigm from treating an isolated problem to nurturing a relational system.

Furthermore, cultural norms can act as a double-edged sword, profoundly shaping women's experiences of menopause and sexuality, highlighting the critical need for culturally competent care. While some cultures may perceive menopause as a period of sexual liberation due to the cessation of reproductive concerns, others may view it as an end to sexual identity or impose expectations for continued sexual activity.[17, 18] These cultural norms can also create barriers to open discussion about sensitive topics, negatively impacting psychological health.[18] This necessitates that interventions for menopausal sexual health must be culturally sensitive and tailored to the specific contexts of patients. Healthcare providers need to understand and respect the diverse cultural backgrounds of their patients, recognizing that a universal approach to sexual health in menopause will likely be ineffective. This also points to a significant gap in current research, emphasizing the need for more studies in diverse cultural contexts, particularly in non-Western countries where such perspectives are currently underrepresented.[1]

## 5. Prevalence and Characteristics of Sexual Health Challenges

Female sexual dysfunction (FSD) is highly prevalent among postmenopausal women.[8] More than one-third of women navigating perimenopause or menopause report experiencing sexual difficulties, ranging from a lack of interest in sex to challenges in achieving orgasm.[15] One study specifically found that 36.28% of menopausal women reported FSD [17], while another indicated that 64% of postmenopausal women were at risk of sexual dysfunction.[4] Interestingly, while the prevalence of sexual problems generally increases with age, the associated personal distress may conversely decline with advancing age.[8, 10] For instance, a German study reported low sexual desire in 19.4% of younger women (18-24 years) compared to 31.5% in older women (46-55 years), with hypoactive sexual desire disorder (HSDD) accompanied by severe distress affecting 6.2% and 7.3% respectively in these age groups.[10] An Australian study further highlighted this trend, reporting low desire in 27.4% of women aged 18-24 years versus 58.9% of those aged 45-49 years, and HSDD in 12.2% versus 31.6% respectively.[10]

Specific sexual complaints are highly common across the menopausal continuum:

* **Low Sexual Desire/Hypoactive Sexual Desire Disorder (HSDD):** A persistent absence of sexual drive and fantasies is identified as the most common sexual complaint among postmenopausal women. Longitudinal data indicates that 24% of postmenopausal women reported never feeling sexual desire, and an additional 41% reported infrequent desire.[19] The prevalence of low sexual desire ranges from 26.7% among premenopausal women to 52.4% among naturally menopausal women.[19] HSDD prevalence was highest among surgically menopausal women (12.5%).[19] Women experience a significant decrease in sexual desire during the late perimenopausal stage and early postmenopause.[19] The prevalence of low sexual desire accompanied by associated distress was reported as 32.2% among women aged 40-64 years and 13.6% among women aged 65-79 years.[8]
* **Vaginal Dryness and Painful Intercourse (Dyspareunia):** Vaginal dryness and dyspareunia become more likely in the later stages of perimenopause, affecting approximately one-third of the population.[2] Between 27% and 60% of women report vaginal dryness or dyspareunia in association with menopause.[12] More broadly, vaginal dryness affects 50% of women after menopause.[13] The negative consequences of vaginal atrophy on sexual life were reported by 41% of women, with 27% stating it negatively impacted their self-esteem.[19]
* **Difficulties with Arousal or Orgasm:** Problems related to arousal or orgasm are also common after menopause.[5] Anorgasmia with distress has been reported to affect 7-8% of women under 40 years of age, 5-7% of women aged 40-64, and 3-6% of women 65 years or older.[10] A study from Thailand indicated that 86% of women reported not experiencing orgasm after menopause.[8]

Despite these common challenges, there is considerable variability in individual experiences. While many women report a decrease in sexual desire or frequency, some studies indicate that only a minority of participants experienced such changes, or that most did not report menopause-related changes. Some women even report enjoying sex more after menopause, while others find their desire or response less intense.[15] The cessation of fertility can lead to a sense of freedom from pregnancy worries, which for some, enhances sexual satisfaction.[17] It is also noteworthy that some women attribute their sexual changes to the natural aging process rather than specifically to menopause, which can blur the distinction and potentially affect their willingness to seek help.[19] The etiology of sexual dysfunction does not always directly correlate with hormonal changes, further complicating this distinction.[12]

### Key Table 1: Prevalence of Female Sexual Dysfunction and Key Symptoms Across Menopausal Stages

| Symptom/Dysfunction | Menopausal Stage | Prevalence Rate (%) | Key Findings/Context | Source Snippet ID |
| :------------------ | :--------------- | :------------------ | :------------------- | :---------------- |
| Overall FSD | Postmenopausal | 36.28% | Based on FSFI scores | [17] |
| Overall FSD (risk) | Postmenopausal | 64% | Lower scores in desire, interest, comfort, orgasm, satisfaction | [4] |
| Sexual Difficulties | Perimenopause/Menopause | >33% | Ranging from lack of interest to trouble with orgasm | [15] |
| Low Sexual Desire | Premenopausal | 26.7% | | [19] |
| Low Sexual Desire | Naturally Menopausal | 52.4% | | [19] |
| Low Sexual Desire | Postmenopausal | 24% (never felt), 41% (infrequently felt) | | [19] |
| Low Sexual Desire | Women 18-24 years | 19.4% (German study), 27.4% (Australian study) | | [10] |
| Low Sexual Desire | Women 45-49 years | 58.9% (Australian study) | | [10] |
| Low Sexual Desire | Women 46-55 years | 31.5% (German study) | | [10] |
| Low Sexual Desire with Distress | Women 40-64 years | 32.2% | | [8] |
| Low Sexual Desire with Distress | Women 65-79 years | 13.6% | | [8] |
| HSDD with Severe Distress | Women 18-24 years | 6.2% (German study), 12.2% (Australian study) | | [10] |
| HSDD with Severe Distress | Women 45-49 years | 31.6% (Australian study) | | [10] |
| HSDD with Severe Distress | Women 46-55 years | 7.3% (German study) | | [10] |
| HSDD | Surgically Menopausal | 12.5% | Highest proportion | [19] |
| Vaginal Dryness/Dyspareunia | Late Perimenopause | ~33% | | [2] |
| Vaginal Dryness/Dyspareunia | Menopause Associated | 27-60% | | [12] |
| Vaginal Dryness | After Menopause | 50% | | [13] |
| Vaginal Dryness | Symptomatic VVA | 83% | | [8] |
| Pain during Intercourse | Symptomatic VVA | 42% | | [8] |
| Vaginal Atrophy (negative consequences on sex life) | Postmenopausal | 41% | Also impacted self-esteem (27%) | [19] |
| Anorgasmia with Distress | Women <40 years | 7-8% | | [10] |
| Anorgasmia with Distress | Women 40-64 years | 5-7% | | [10] |
| Anorgasmia with Distress | Women 65+ years | 3-6% | | [10] |
| Not experiencing orgasm | After Menopause | 86% | Thai study | [8] |

A compelling observation is the paradox of increasing sexual problems with decreasing distress in older age. Data clearly indicates that while the prevalence of sexual problems generally rises with advancing age, this increase is concurrently associated with a decline in reported personal distress.[8, 10] This suggests a complex psychological adaptation among older women. As they age, women may develop effective coping mechanisms, redefine what constitutes sexual satisfaction, or experience a sense of "sexual liberation" from the anxieties and concerns associated with reproduction, such as unwanted pregnancy or menstruation.[3, 17] This pattern implies that interventions for older postmenopausal women may need to shift their focus. Rather than solely aiming to "fix" a perceived problem, the emphasis could be more on supporting adaptation, facilitating the redefinition of intimacy, and addressing distress specifically when it does manifest, rather than assuming that dysfunction automatically correlates with distress.

Furthermore, the impact of vaginal atrophy on sexual quality of life is frequently underestimated despite its high prevalence. Vaginal dryness and dyspareunia are exceptionally common during and after menopause, directly linked to the physiological decline in estrogen.[2, 8, 12, 13] The data reveals that a significant proportion of women (41%) experience negative consequences on their sex life due to vaginal atrophy, and nearly a third (27%) report a negative impact on their self-esteem.[19] This highlights that beyond the physical discomfort, vaginal atrophy carries a substantial emotional and relational burden that is often overlooked. This observation reinforces the critical need for healthcare providers to proactively discuss and screen for symptoms of vaginal atrophy and to ensure accessible and effective treatments. Addressing these physical symptoms can lead to profound positive effects on a woman's self-perception, confidence, and overall sexual satisfaction, demonstrating a ripple effect beyond mere physiological relief.

## 6. Evidence-Based Interventions and Management Strategies

Addressing sexual health challenges during the menopausal transition requires a multifaceted approach, encompassing hormonal, non-hormonal, lifestyle, and behavioral interventions.

**Hormone Therapy (HT):**
Hormone therapy involves the administration of various hormones or combinations thereof to alleviate menopausal symptoms, including those affecting sexual function.[5] HT is believed to improve symptoms such as dryness, itching, and painful intercourse by increasing lubrication, blood flow, and sensation in vaginal tissues.[5]

* **Estrogen Alone:** This therapy probably slightly improves the sexual function composite score in symptomatic or early postmenopausal women (SMD 0.50, moderate-quality evidence).[5] It is also likely to slightly improve specific domains such as lubrication, pain, and satisfaction.[5] For unselected postmenopausal women, estrogen alone probably makes little or no difference to the overall sexual function composite score but likely provides a slight improvement in lubrication.[5]
* **Estrogen Combined with Progestogens:** The effect of this combination on the sexual function composite score remains uncertain due to very low-quality evidence.[5] However, it may slightly improve lubrication.
* **Synthetic Steroids (e.g., Tibolone):** The effect of synthetic steroids on the sexual function composite score is uncertain due to very low-quality evidence, and overall evidence regarding tibolone's effect on sexual function is scarce.[5]
* **Selective Estrogen Receptor Modulators (SERMs) (e.g., Ospemifene):** For symptomatic or early postmenopausal women, the effect of SERMs on the sexual function composite score is uncertain. However, in unselected postmenopausal women, SERMs may slightly improve the composite score and probably slightly improve desire, arousal, lubrication, orgasm, satisfaction, and pain.
* **Testosterone Therapy:** This can improve sexual function, including desire and frequency, in postmenopausal women. However, safer alternatives such as relationship intervention, sex therapy, and optimizing depression treatment should be considered first. Testosterone therapy requires cautious use in patients at high risk of breast cancer, endometrial hyperplasia or cancer, cardiovascular disease, and hepatic disease, as it can cause hirsutism and decreased HDL levels.
* **Local Vaginal Estrogen and DHEA:** These topical treatments are effective for dyspareunia with minimal systemic absorption, making them a targeted approach for vaginal symptoms.

It is important to acknowledge the limitations of current evidence regarding hormone therapy. Most studies have focused on postmenopausal women, with limited data specifically on perimenopausal women. Furthermore, studies vary significantly in participant characteristics, drugs used, dosages, administration routes, and assessment tools, contributing to heterogeneity in findings. A high proportion of included studies (20 out of 36) were at high risk of bias, and 14 were at unclear risk, which impacts the overall quality and precision of the evidence. More well-designed randomized controlled trials are needed, particularly for combined hormone therapies and in perimenopausal women, to clarify their true effects on sexual function.[5]

**Non-Hormonal and Lifestyle Interventions:**
Beyond hormonal approaches, several non-hormonal and lifestyle strategies can significantly improve sexual health:

* **Over-the-Counter Solutions for Vaginal Dryness:** Vaginal moisturizers, applied a few times per week, work by improving moisture in vaginal cells for natural hydration. Vaginal lubricants, used during sexual activity, make penetration more comfortable. It is crucial to select fragrance-free products to protect vaginal health.[13]
* **Dietary Changes:** Adopting a healthy, balanced diet, such as the Mediterranean Diet, can reduce inflammation, decrease the risk of metabolic syndrome, and maintain a healthy weight. These benefits contribute to healthy blood vessels, which are essential for genital arousal and vaginal lubrication. Limiting sodium intake enhances vessel dilation. Soy intake (e.g., tofu, edamame), watermelon, apples, and cacao have also been shown to help boost vaginal blood flow and lubrication.[13]
* **Physical Activity:** Regular exercise can increase energy levels, positively influence hormones and the nervous system to promote mental and physiological arousal, and boost mood and body image. One study found that women engaging in frequent physical activity had up to an 80% reduction in the chances of experiencing low libido.[13]
* **Prioritizing Sleep:** Sleep problems are linked to sexual dysfunction.[4] Addressing sleep disturbances can improve overall well-being, which in turn positively influences sexual health.

**Behavioral and Relational Approaches:**

* **Communication with Partners:** Open communication about changing sexuality and expectations is crucial for maintaining intimacy and satisfaction.[15]
* **Redefining Intimacy:** Sexual expression can extend beyond intercourse to focus on non-genital contact and emotional intimacy, enriching mutual relationships.
* **Exploring New Approaches:** Reaching orgasm may require longer and more direct, intense clitoral stimulation. Using sex toys can enhance sensitivity and response.[15] Trying different sexual positions and creating a positive atmosphere can also improve sexual life.
* **Seeking Professional Help:** Women can seek support from gynecologists, healthcare providers, or sexuality health centers. Healthcare professionals play a vital role in creating a warm, safe, and non-judgmental environment for women to discuss sensitive sexual concerns, offering encouragement, education, and support.
* **Positive Reframing and Sexual Agency:** Encouraging women to view menopause as an opportunity for exploring, enjoying, and establishing their sexual agency and self-empowerment is essential for adapting positively to changes.

### Key Table 2: Evidence-Based Interventions for Menopausal Sexual Health Challenges

| Sexual Health Challenge | Intervention Type | Specific Intervention | Mechanism/Benefit | Effectiveness/Evidence Summary | Quality of Evidence | Considerations/Side Effects | Source Snippet ID |
| :---------------------- | :---------------- | :-------------------- | :---------------- | :----------------------------- | :------------------ | :-------------------------- | :---------------- |
| Vaginal Dryness/Dyspareunia | Hormonal | Estrogen Alone (systemic) | Increases lubrication, blood flow, sensation | Probably slightly improves lubrication, pain, satisfaction | Moderate | | [5] |
| Vaginal Dryness/Dyspareunia | Hormonal | Local Vaginal Estrogen/DHEA | Increases lubrication, elasticity; reduces pain | Effective for dyspareunia | N/A | Minimal systemic absorption | |
| Vaginal Dryness/Dyspareunia | Non-Hormonal | Vaginal Moisturizers | Improves moisture in vaginal cells | Recommended for natural hydration | N/A | Fragrance-free recommended | [13] |
| Vaginal Dryness/Dyspareunia | Non-Hormonal | Vaginal Lubricants | Makes penetration more comfortable | Recommended for use during activity | N/A | Fragrance-free, condom-compatible recommended | [13] |
| Low Libido/Overall Sexual Dysfunction | Hormonal | Estrogen Alone (systemic) | Improves sexual function composite score, desire | Probably slightly improves sexual function composite score (symptomatic/early postmenopausal) | Moderate | | [5] |
| Low Libido/Overall Sexual Dysfunction | Hormonal | Testosterone Therapy | Improves desire and frequency | Can improve sexual function | N/A | Use cautiously; consider safer options first; hirsutism, decreased HDL | |
| Low Libido/Overall Sexual Dysfunction | Hormonal | SERMs (e.g., Ospemifene) | May improve composite score, desire, arousal, orgasm, satisfaction, pain | May slightly improve composite score (unselected postmenopausal); probably slightly improves specific domains | Low | | |
| Low Libido/Overall Sexual Dysfunction | Lifestyle | Dietary Changes (e.g., Mediterranean Diet, soy) | Reduces inflammation, improves vascular health, boosts blood flow/lubrication | Supports genital arousal and lubrication | N/A | | [13] |
| Low Libido/Overall Sexual Dysfunction | Lifestyle | Physical Activity | Amps up energy, positive impact on hormones/nervous system, mood/body image booster | Up to 80% reduction in low libido chance with frequent activity | N/A | | [13] |
| Low Libido/Overall Sexual Dysfunction | Lifestyle | Prioritizing Sleep | Improves overall well-being | Linked to sexual dysfunction; addressing sleep problems can improve sexual health | N/A | | [4] |
| Overall Sexual Dysfunction | Behavioral/Relational | Communication with Partners | Sets realistic expectations, helps adjust to changes | Key for setting expectations and adjustment | N/A | | [15] |
| Overall Sexual Dysfunction | Behavioral/Relational | Redefining Intimacy/Exploring New Approaches | Focuses on non-genital contact, emotional intimacy; uses toys, different positions | Enhances sexual satisfaction, boosts sensitivity | N/A | | [15] |
| Overall Sexual Dysfunction | Behavioral/Relational | Seeking Professional Help | Provides support, education, safe discussion environment | Healthcare providers play critical role | N/A | | |
| Overall Sexual Dysfunction | Behavioral/Relational | Positive Reframing/Sexual Agency | Challenges societal norms, fosters self-empowerment | Vital for adapting to changes and self-pleasure | N/A | | |

The complementary nature of hormonal and non-hormonal interventions is a significant observation. While hormone therapy, particularly estrogen, demonstrates promise in improving sexual function, especially in areas like lubrication and pain [5], the quality of evidence for many other hormone therapy types remains low or uncertain.[5] Crucially, non-hormonal strategies, including the use of vaginal lubricants and moisturizers, dietary adjustments, and regular exercise, are also highlighted as effective approaches.[13] This suggests that a multi-modal approach, which combines targeted medical interventions (such as local estrogen for GSM) with broader lifestyle modifications and behavioral strategies, is likely the most effective and comprehensive way to address the diverse spectrum of sexual health challenges during menopause. This perspective encourages healthcare providers to move beyond solely pharmacological solutions and to integrate a wider range of evidence-based strategies tailored to individual women's needs and preferences.

Furthermore, the importance of patient education and empowerment in influencing treatment adherence and outcomes cannot be overstated. Research indicates that women who possess sufficient information about menopause and demonstrate acceptance of the menopausal process tend to report higher levels of sexual satisfaction. Additionally, women often adapt their behavior by actively "seeking treatment" or utilizing "medical aids". This implies that patient education extends beyond simply providing facts; it is about empowering women to understand the physiological and psychological changes occurring in their bodies, accept these changes, and actively participate in managing their sexual health. When women are well-informed and feel a sense of agency over their health, they are more likely to seek appropriate care, adhere to recommended treatments (e.g., consistent use of lubricants), and adapt their sexual lives in positive ways. This active engagement can lead to better treatment outcomes and overall sexual satisfaction. This highlights a critical role for healthcare providers as not just prescribers, but also as educators and facilitators of self-empowerment for women navigating menopause.

## 7. Impact on Overall Quality of Life and Well-being

Menopause is a natural biological process that extends its influence beyond sexual health, profoundly affecting a woman's physical, mental, and social well-being.[1] The health concerns commonly reported among menopausal women are broad, encompassing vasomotor symptoms (e.g., hot flashes), urogenital atrophy, osteoporosis, cardiovascular disease, cancer, psychiatric symptoms, cognitive decline, and various sexual problems.[12] These issues often coalesce into what is referred to as postmenopausal syndrome, characterized by four core symptoms: hot flashes, poor sleep, genitourinary symptoms/sexual dysfunction, and mood changes.[12] Critically, these menopausal symptoms negatively impact Health-Related Quality of Life (HRQoL).[7] This impact is particularly distressing because these symptoms often emerge at a life stage when women typically hold essential societal roles within their families and workplaces.[7]

There is a clear association between the severity of menopausal symptoms and a woman's overall quality of life. Retrospective assessment of menopause symptom severity, as measured by the Menopause Rating Scale (MRS) total score, has been significantly linked to current levels of depression, sleep difficulties, binge eating severity, and most measures of quality of life.[9] Higher MRS scores consistently correlate with poorer current mental health and overall quality of life. Specifically, psychological and somato-vegetative symptoms are most consistently associated with diminished mental health and quality of life.[9] Furthermore, the physical health composite of HRQoL is reported to be lower in late perimenopausal, early postmenopausal, and late postmenopausal women compared to premenopausal women.[20] Similarly, the mental health composite of HRQoL is also reduced in late perimenopausal and postmenopausal women when compared to their premenopausal counterparts.[20] This negative impact on HRQoL can persist over a five-year follow-up period, even when accounting for the presence of menopausal symptoms.[20]

The prevalence of poor quality of life among menopausal women is substantial. In one study, approximately half (51.4%) of menopausal women reported a poor quality of life.[7] Similar findings of impaired quality of life (50.6%, 53%) have been reported in other studies.[7] The mean MRS score of 9.5±5.3 in these studies often indicates a poor quality of life.[7] Common contributing factors to a reduced quality of life include frequently experienced somatic symptoms such as joint and muscular discomfort, hot flashes, and sleep problems.[7] Psychological symptoms, including anxiety, physical and mental exhaustion, depressive mood, and irritability, are also highly prevalent and impact quality of life.[7] Urogenital symptoms, such as sexual problems, bladder problems, and vaginal dryness, further contribute to a decline in quality of life.[7] Conversely, factors associated with a better quality of life include higher educational attainment, receiving medication or treatment for health problems, never consuming alcohol, and engaging in regular physical activity.

The enduring legacy of menopausal symptom severity on long-term quality of life is a critical consideration. A study focusing on postmenopausal women aged 60 and older revealed that the *retrospective* severity of menopausal symptoms significantly impacts *current* mental health and quality of life, even many years after the menopausal transition.[9] This finding highlights a crucial "ripple effect": the intensity of symptoms experienced during the active menopausal transition (perimenopause and menopause) has a lasting and long-term influence on a woman's overall well-being, potentially extending into her senior years. This underscores the profound importance of effective symptom management during the menopausal transition, not merely for immediate relief but as a protective factor for mental health and quality of life in later life. It suggests that healthcare systems should prioritize robust and comprehensive menopause care, as its implications extend far beyond the immediate symptomatic period.

Despite the significant impact of menopausal symptoms on health-related quality of life [7], and the evidence that effective treatment can improve quality of life, there appears to be a disconnect between symptom experience and access to care. Research notes "poor health literacy as well as health-seeking behavior" among menopausal women.[11] This implies a substantial gap between the widespread experience of debilitating symptoms and women's ability or willingness to seek and receive appropriate care. This observation points to a clear need for public health campaigns and enhanced training for healthcare providers to increase awareness, reduce the stigma associated with discussing menopause and sexual health, and thereby facilitate better access to and utilization of evidence-based interventions. The finding that women with secondary education were more likely to report a good quality of life further reinforces the crucial role of education and awareness in empowering women to manage their menopausal health effectively.

## 8. Conclusion and Future Directions

Sexual health during perimenopause, menopause, and postmenopause is a complex and multifaceted domain, shaped by an intricate interplay of physiological, psychological, and social factors. The decline in estrogen levels drives significant physiological changes, notably Genitourinary Syndrome of Menopause (GSM)/Vulvovaginal Atrophy (VVA), which manifests as vaginal dryness and painful intercourse. Psychologically, mood changes, shifts in body image, and stress profoundly influence sexual desire and satisfaction. Furthermore, social and relational dynamics, including partner health, communication patterns, and cultural norms, critically shape a woman's sexual experiences. Sexual dysfunction is highly prevalent across the menopausal continuum, affecting a significant proportion of women, though individual experiences and the associated distress can vary considerably. The impact of these challenges extends beyond sexual function, profoundly influencing a woman's overall quality of life and mental well-being.

For clinical practice and public awareness, several key takeaways emerge from this review:

* **Holistic Assessment:** Healthcare providers must adopt a comprehensive biopsychosocial approach, assessing not only physiological symptoms but also psychological well-being, relationship dynamics, and relevant cultural influences to provide truly patient-centered care.
* **Proactive Screening:** Routine inquiry about sexual activity and symptoms, particularly GSM/VVA and mood changes, is crucial. Given the persistent nature of some symptoms and the peak of psychological distress during perimenopause, early and proactive screening can facilitate timely intervention.
* **Integrated Interventions:** The most effective management strategies often involve a combination of hormonal therapies (such as systemic or local estrogen, and carefully monitored testosterone where indicated) and non-hormonal approaches (including vaginal lubricants and moisturizers, lifestyle modifications like exercise and diet).
* **Patient Education and Empowerment:** Providing accurate, accessible information, fostering a positive body image, and encouraging open communication with partners and healthcare providers are vital steps in empowering women to navigate these changes, make informed decisions, and ultimately improve their sexual satisfaction.
* **Couple-Centered Care:** Recognizing the inherent interdependence of partners' sexual health, involving spouses in discussions and interventions can lead to more beneficial outcomes for both individuals and the relationship.

Despite the growing body of research, several gaps in current understanding persist, indicating important directions for future studies:

* **Perimenopausal Focus:** The majority of existing studies have concentrated on postmenopausal women. More dedicated research is needed to understand the distinct sexual health challenges and the effectiveness of various interventions specifically during the perimenopausal stage.
* **Quality of Evidence:** A significant proportion of studies on hormone therapy for sexual function are limited by a high or unclear risk of bias. There is a pressing need for more well-designed, robust randomized controlled trials, particularly for estrogen combined with progestogens, synthetic steroids, and Selective Estrogen Receptor Modulators (SERMs).
* **Diverse Cultural Contexts:** Future research should actively explore women's experiences of menopause and sexual health across a broader spectrum of cultural contexts, with particular attention to non-Western countries where perspectives are currently underrepresented.
* **Longitudinal Studies:** To better understand the long-term impact of menopausal symptom severity on mental health and quality of life, more comprehensive longitudinal studies are required, moving beyond cross-sectional associations.
* **Standardized Measures:** The relationship between anxiety and the menopausal transition remains somewhat unclear due to inconsistencies and a lack of standardized measures of anxiety across various studies. Future research should prioritize the adoption of standardized and validated assessment tools.
* **Mechanisms of Psychological Impact:** Further investigation is warranted to clarify whether psychological issues diminish after the perimenopausal stage due to habituation to lower estrogen levels. Exploring the genetic, endocrinological, neural, and psychosocial factors that contribute to depressive symptoms during phases of hormonal transitions in women will provide deeper insights.

## 9. References

* **1:** (https://www.dovepress.com/a-meta-ethnography-of-womens-intimate-and-sexual-experiences-across-th-peer-reviewed-fulltext-article-IJWH)
* **2:** (https://pmc.ncbi.nlm.nih.gov/articles/PMC4834516/)
* **3:** (https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0306207)
* **4:** (https://www.scielo.br/j/rbgo/a/K3hHWFnxfFZdZttskpKX5yj/)
* **5:** (https://pmc.ncbi.nlm.nih.gov/articles/PMC10449239/)
* **6:** (https://www.researchgate.net/publication/344145577_Do_complaints_related_to_menopause_affect_sexuality_and_marital_adjustment)
* **7:** (https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0280632)
* **8:** (https://www.imsociety.org/wp-content/uploads/2020/07/sexual-welbeing-after-menopause-english.pdf)
* **9:** (https://pmc.ncbi.nlm.nih.gov/articles/PMC9178181/)
* **10:** (https://www.myprivia.com/sites/default/files/2025-04/psvmd_sexualdisinfection_women.pdf)
* **11:** (https://www.researchgate.net/publication/390688872_Psychological_Changes_at_Menopause_Anxiety_Mood_Swings_and_Sexual_Health_in_the_Biopsychosocial_Context)
* **12:** (https://www.ncbi.nlm.nih.gov/books/NBK560840/)
* **13:** (https://www.joinmidi.com/post/how-to-increase-libido)
* **14:** (https://www.healthline.com/health/womens-health/how-to-increase-estrogen)
* **15:** (https://www.hopkinsmedicine.org/health/wellness-and-prevention/how-sex-changes-after-menopause)
* **16:** (https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1323743/full)
* **17:** (https://www.researchgate.net/publication/347737649_The_impact_of_menopause_on_sexual_function_in_women_and_their_spouses)
* **18:** (https://gh.bmj.com/content/10/6/e017863)
* **19:** (https://www.ohsu.edu/sites/default/files/2019-04/Libido-prevalence-Brief_FINAL.pdf)
* **20:** (https://www.researchgate.net/publication/51491327_The_impact_of_menopause_on_health-related_quality_of_life_Results_from_the_STRIDE_longitudinal_study)

`;

// Helper function to create a unique ID for chat messages
const generateId = () => Math.random().toString(36).substr(2, 9);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const quizQuestions = [
    {
      id: 'desire',
      question: 'In the past month, how often have you felt a lack of desire or interest in sexual activity?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    },
    {
      id: 'arousal',
      question: 'How often have you had difficulty with sexual arousal (e.g., not feeling physically or mentally aroused)?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    },
    {
      id: 'lubrication',
      question: 'How often have you experienced vaginal dryness during sexual activity?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    },
    {
      id: 'pain',
      question: 'How often have you experienced pain or discomfort during or after sexual intercourse?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    },
    {
      id: 'orgasm',
      question: 'How often have you had difficulty achieving an orgasm?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    },
    {
      id: 'distress',
      question: 'To what extent have any of these sexual problems caused you personal distress or frustration?',
      options: ['Not at all', 'Slightly', 'Moderately', 'Very much', 'Extremely'],
    },
  ];

  const handleQuizChange = (questionId, value) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: value });
  };

  const handlePrintQuiz = () => {
    const printContent = `
      <h1>Sexual Health Symptom Checklist</h1>
      <p>Please review your answers below and feel free to discuss them with your healthcare provider.</p>
      ${quizQuestions.map(q => `
        <p><strong>${q.question}</strong></p>
        <p>Answer: ${quizAnswers[q.id] || 'Not answered'}</p>
        <hr />
      `).join('')}
    `;

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Menopause Quiz Results</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isChatLoading) return;

    const userMessage = { id: generateId(), text: userInput, sender: 'user' };
    const newChatHistory = [...chatHistory, userMessage];
    setChatHistory(newChatHistory);
    setUserInput('');
    setIsChatLoading(true);

    try {
      // Prompt for the AI chatbot
      const aiPrompt = `
        You are a supportive and knowledgeable "sexual health coach" for women experiencing perimenopause and menopause.
        Your role is to provide empathetic, non-judgmental, and evidence-based information.
        Do not provide medical advice or diagnoses. Always encourage the user to consult a healthcare professional.
        Base your responses on the provided comprehensive review of peer-reviewed scientific literature on sexual health during menopause.
        Here is the source document you should reference:
        "${educationalContent}"
        Acknowledge the user's feelings and then provide a helpful response.
        User message: "${userInput}"
      `;

      let chatHistoryForApi = [];
      chatHistoryForApi.push({ role: "user", parts: [{ text: aiPrompt }] });
      const payload = { contents: chatHistoryForApi };
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      const aiResponseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I am unable to respond right now. Please try again later.';
      const botMessage = { id: generateId(), text: aiResponseText, sender: 'bot' };
      setChatHistory(prevHistory => [...prevHistory, botMessage]);

    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      const errorMessage = { id: generateId(), text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' };
      setChatHistory(prevHistory => [...prevHistory, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="prose prose-lg mx-auto p-6 md:p-10 lg:prose-xl">
            <div dangerouslySetInnerHTML={{ __html: marked(educationalContent) }} />
          </div>
        );
      case 'quiz':
        return (
          <div className="flex flex-col items-center p-6 md:p-10">
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Symptom Checklist for Your Doctor</h1>
              <p className="text-center text-gray-600 mb-8">This tool is for self-assessment and educational purposes. Please complete this checklist and print it to facilitate a focused conversation with your healthcare provider.</p>

              {quizQuestions.map((q) => (
                <div key={q.id} className="mb-6 p-4 border rounded-xl bg-gray-50">
                  <p className="text-lg font-semibold text-gray-700 mb-3">{q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((option) => (
                      <label key={option} className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={q.id}
                          value={option}
                          checked={quizAnswers[q.id] === option}
                          onChange={(e) => handleQuizChange(q.id, e.target.value)}
                          className="form-radio text-rose-500 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handlePrintQuiz}
                  className="bg-rose-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-rose-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                >
                  Print for my Doctor
                </button>
              </div>
            </div>
          </div>
        );
      case 'chatbot':
        return (
          <div className="relative flex flex-col h-[80vh] bg-white rounded-lg shadow-xl p-4 md:p-6 mx-auto max-w-2xl">
            <div className="flex-1 overflow-y-auto space-y-4 p-4 mb-4 bg-gray-50 rounded-xl scroll-smooth">
              {chatHistory.length === 0 ? (
                <div className="text-center text-gray-500 italic p-6">
                  Hello! I'm your AI sexual health coach. I'm here to help you understand the changes you might be experiencing during menopause based on the provided scientific literature. How can I assist you today?
                </div>
              ) : (
              chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-4 rounded-xl max-w-[80%] prose prose-sm ${msg.sender === 'user'
                      ? 'bg-rose-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {/* Conditionally render based on sender */}
                    {msg.sender === 'user' ? (
                      <p>{msg.text}</p> // User messages are simple text
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: marked(msg.text) }} />
                    )}
                  </div>
                </div>
              ))
              )}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="p-4 rounded-xl max-w-[80%] bg-gray-200 text-gray-800 rounded-bl-none animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me about sexual health during menopause..."
                className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                disabled={isChatLoading}
              />
              <button
                type="submit"
                className="bg-rose-500 text-white p-3 rounded-full shadow-md hover:bg-rose-600 transition"
                disabled={isChatLoading}
              >
                <MessageSquare className="h-6 w-6" />
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-rose-600 mb-2 sm:mb-0">Menopause & Sexual Health</h1>
          <nav>
            <ul className="flex space-x-2 md:space-x-4">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition duration-300 ${currentPage === 'home' ? 'bg-rose-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  <Book className="h-4 w-4 mr-2" />
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('quiz')}
                  className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition duration-300 ${currentPage === 'quiz' ? 'bg-rose-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Symptom Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('chatbot')}
                  className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition duration-300 ${currentPage === 'chatbot' ? 'bg-rose-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chatbot
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          <p>
            Disclaimer: This application is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </footer>
    </div>
  );
};

// This is necessary for a self-contained React app
export default App;